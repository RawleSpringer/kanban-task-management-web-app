const Task = ({ task }) => {
  //* * ! task = {title: 'Build UI for onboarding flow', description: '', status: 'Todo', subtasks: Array(3)} */
  const subTasks = task.subtasks;

  const totalSubTasks = subTasks.length;
  let completedSubTasks = 0;

  for (let index = 0; index < subTasks.length; index++) {
    let subTaskCompleted = subTasks[index].isCompleted;
    if (subTaskCompleted) {
      completedSubTasks++;
    }
  }

  return (
    <li className="w-72 bg-white h-28 mb-4 flex flex-col justify-center rounded-md drop-shadow-md">
      <p className="ml-4">{task.title}</p>
      <p className="ml-4">
        {completedSubTasks} of {totalSubTasks} subtasks
      </p>
    </li>
  );
};

export default Task;
