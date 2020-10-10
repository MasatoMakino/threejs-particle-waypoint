"use strict";

const { series, parallel } = require("gulp");

const doc = require("gulptask-tsdoc").generateTask();
const server = require("gulptask-dev-server").generateTask("./docs/demo");

const { bundleDemo, watchDemo } = require("gulptask-demo-page").generateTasks({
  body: `<canvas id="webgl-canvas" width="1280" height="768"></canvas>`,
});

const { tsc, watchTsc } = require("gulptask-tsc").generateTasks({
  projects: ["tsconfig.json", "tsconfig.esm.json"],
});

const watchTasks = async () => {
  watchDemo();
  watchTsc();
};

exports.start_dev = series(watchTasks, server);
exports.build = series(tsc, parallel(bundleDemo, doc));
