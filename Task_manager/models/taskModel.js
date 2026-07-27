const TaskSchema = new mongoose.Schema({
    userId: String,
    title: String,
    description: String,
    completed: Boolean,
  }, { timestamps: true });
  export default mongoose.model("Task", TaskSchema);