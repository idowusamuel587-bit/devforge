import test from "node:test";
import assert from "node:assert/strict";

import {
  APP_NAME,
  APP_VERSION,
  createProject,
  createTask
} from "../app.js";

test("application has the correct name", () => {
  assert.equal(APP_NAME, "DEVFORGE");
});

test("application has a version", () => {
  assert.equal(APP_VERSION, "1.0.0");
});

test("creates a project with trimmed values", () => {
  const project = createProject(
    "  My Website  ",
    "  Build a modern website  "
  );

  assert.equal(project.name, "My Website");
  assert.equal(project.description, "Build a modern website");
  assert.ok(!Number.isNaN(Date.parse(project.createdAt)));
});

test("rejects an empty project name", () => {
  assert.throws(
    () => createProject("   "),
    /Project name is required/
  );
});

test("creates a task that is incomplete by default", () => {
  const task = createTask("  Finish homepage  ");

  assert.equal(task.title, "Finish homepage");
  assert.equal(task.completed, false);
});

test("rejects an empty task title", () => {
  assert.throws(
    () => createTask(""),
    /Task title is required/
  );
});
