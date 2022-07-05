const TaskDetail = ({ selectedTask }) => {
  console.log(selectedTask);

  const subTasks = selectedTask.task.subtasks;

  const totalSubTasks = subTasks.length;
  let completedSubTasks = 0;

  // let filteredSubTasks = selectedTask.task;

  for (let index = 0; index < subTasks.length; index++) {
    let subTaskCompleted = subTasks[index].isCompleted;
    if (subTaskCompleted) {
      completedSubTasks++;
    }
  }

  return (
    <aside className="w-480 h-523 bg-white flex flex-col   z-20 absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 space-y-8">
      <header className="flex items-center justify-between">
        <h1 className="text-lg font-bold">{selectedTask.task.title}</h1>
        <img src="/assets/icon-vertical-ellipsis.svg" alt="" />
      </header>

      <p className=" text-medium-grey text-sm">
        {selectedTask.task.description}
      </p>
      <p>
        <h4 className="mb-3 text-medium-grey">
          {completedSubTasks} of {totalSubTasks} subtasks
        </h4>
        <p className="space-y-3">
          {subTasks.map((subtask) => {
            return (
              <p
                className="flex bg-light-grey p-4 h-10 items-center"
                key={subtask.title}
              >
                <input type="checkbox" className="mr-3" />
                <p>{subtask.title}</p>
              </p>
            );
          })}
        </p>
      </p>

      <p className="">
        <h4 className="mb-3 text-medium-grey">Current Status</h4>
        <div>
          <button
            type="button"
            className="inline-flex  w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
          >
            Doing
          </button>
        </div>
      </p>
    </aside>
  );
};

export default TaskDetail;
