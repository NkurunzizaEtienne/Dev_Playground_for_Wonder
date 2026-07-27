import Task from '../models/Task.js';
export const createTask = async (req, res) => {
  const { title, description } = req.body;
  const task = new Task({ userId: req.user.id, title, description, completed: false });
  await task.save();
  res.json(task);
};
export const getTasks = async (req, res) => {
  const tasks = await Task.find({ userId: req.user.id });
  res.json(tasks);
};
export const updateTask = async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) return res.status(404).json({ message: "Task not found" });
  if (task.userId !== req.user.id) return res.status(401).json({ message: "Unauthorized" });
  Object.assign(task, req.body);
  await task.save();
  res.json(task);
};
export const deleteTask = async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) return res.status(404).json({ message: "Task not found" });
  if (task.userId !== req.user.id) return res.status(401).json({ message: "Unauthorized" });
  await task.deleteOne();
  res.json({ message: "Task deleted" });
};