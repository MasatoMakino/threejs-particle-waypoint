# DevContainer Design Notes

## seccomp-chrome.json

### What it is

A custom seccomp (secure computing) profile for running Chrome browser tests in Docker without `--cap-add=SYS_ADMIN`.

### Origin

Based on the moby/profiles default seccomp profile:
https://github.com/moby/profiles/blob/main/seccomp/default.json

moby is the open-source upstream project of Docker Engine. This default profile is automatically applied to every Docker container and defines which Linux syscalls are allowed inside the container.

### Modification

The moby default profile conditionally allows `clone`, `clone3`, `unshare`, and `setns` syscalls only when the process has `CAP_SYS_ADMIN` capability. Chrome's sandbox mechanism requires these syscalls for user namespace isolation.

This custom profile makes those 4 syscalls unconditionally allowed, removing the `CAP_SYS_ADMIN` requirement. It also removes the `clone3` ERRNO entry that explicitly blocks the syscall without `CAP_SYS_ADMIN`.

### Why not SYS_ADMIN

`CAP_SYS_ADMIN` is a broad Linux capability that grants privileges far beyond what Chrome needs:

| Granted by SYS_ADMIN            | Needed by Chrome |
| ------------------------------- | ---------------- |
| mount / umount filesystems      | No               |
| sethostname / setdomainname     | No               |
| Load kernel modules             | No               |
| Swap operations                 | No               |
| clone with CLONE_NEWUSER        | Yes              |
| unshare / setns (namespace ops) | Yes              |

The custom seccomp profile allows only the namespace-related syscalls Chrome actually requires.

### Maintenance

The base profile (moby default) is maintained by the Docker/Moby team and tracks kernel and container runtime changes. Chrome's 4 additional syscalls (`clone`, `clone3`, `unshare`, `setns`) are fundamental Linux namespace APIs with very low change frequency.

If Chrome adds new syscall requirements in the future (as happened with `pkey_mprotect` in Chromium circa 2023), the profile may need updating. Symptoms would be Chrome crashing on container startup.

### License

`seccomp-chrome.json` is a derivative work of moby/profiles `default.json`.

- Original: https://github.com/moby/profiles/blob/main/seccomp/default.json
- License: Apache License 2.0 (https://github.com/moby/profiles/blob/main/LICENSE)
- Copyright: The Moby Authors
- Modifications: Added unconditional SCMP_ACT_ALLOW entry for `clone`, `clone3`, `setns`, `unshare`; removed SCMP_ACT_ERRNO entry for `clone3`.

### Regeneration

To regenerate from the latest moby default:

```bash
curl -sL https://raw.githubusercontent.com/moby/profiles/main/seccomp/default.json \
  | python3 -c "
import sys, json
profile = json.load(sys.stdin)
chrome_syscalls = {'clone', 'clone3', 'unshare', 'setns'}
profile['syscalls'].insert(0, {
    'names': sorted(chrome_syscalls),
    'action': 'SCMP_ACT_ALLOW'
})
profile['syscalls'] = [
    e for e in profile['syscalls']
    if not (e.get('action') == 'SCMP_ACT_ERRNO' and set(e.get('names', [])) <= chrome_syscalls)
]
json.dump(profile, sys.stdout, indent=2)
" > .devcontainer/seccomp-chrome.json
```
