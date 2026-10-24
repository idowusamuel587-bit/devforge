/**
 * DEVFORGE
 * Application utilities and project configuration.
 */

export const APP_NAME = "DEVFORGE";
export const APP_VERSION = "1.0.0";

/**
 * Creates a project object.
 * @param {string} name - Project name.
 * @param {string} description - Project description.
 * @returns {{name: string, description: string, createdAt: string}}
 */
export function createProject(name, description = "") {
  if (typeof name !== "string" || name.trim() === "") {
    throw new Error("Project name is required.");
  }

  return {
    name: name.trim(),
    description: description.trim(),
    createdAt: new Date().toISOString()
  };
}

/**
 * Creates a task object.
 * @param {string} title - Task title.
 * @returns {{title: string, completed: boolean}}
 */
export function createTask(title) {
  if (typeof title !== "string" || title.trim() === "") {
    throw new Error("Task title is required.");
  }

  return {
    title: title.trim(),
    completed: false
  };
    }
