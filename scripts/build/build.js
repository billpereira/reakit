#!/usr/bin/env node
const { join } = require("path");
const spawn = require("cross-spawn");
const {
  makeProxies,
  makeGitignore,
  makePlaygroundDeps,
  cleanBuild,
  hasTSConfig,
  injectPropTypes
} = require("./utils");

process.env.NODE_ENV = "production";

if (process.argv.includes("--no-umd")) {
  process.env.NO_UMD = true;
}

if (process.argv.includes("--no-es")) {
  process.env.NO_ES = true;
}

const cwd = process.cwd();

cleanBuild(cwd);
injectPropTypes(cwd);
makeGitignore(cwd);
makePlaygroundDeps(cwd);
makeProxies(cwd);

if (hasTSConfig(cwd)) {
  spawn.sync("tsc", ["--emitDeclarationOnly"], { stdio: "inherit" });
}

spawn.sync("rollup", ["-c", join(__dirname, "rollup.config.js")], {
  stdio: "inherit"
});
