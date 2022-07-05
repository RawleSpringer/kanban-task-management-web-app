import Task from './Task';

const TasksContainer = ({
  columnName,
  tasks,
  onShowOverlay,
  onSelectedTask,
}) => {
  //* * ! columns = {title: 'Build UI for onboarding flow', description: '', status: 'Todo', subtasks: Array(3)} /

  const allCapsColumnName = columnName.toUpperCase();
  return (
    <article className="mr-6 w-72">
      <p className="flex items-center mb-6">
        <span className="w-3.5 h-3.5 bg-green rounded-md mr-3"></span>
        <h2>{allCapsColumnName}</h2>
      </p>

      <ul>
        {tasks.map((task) => {
          return (
            <Task
              task={task}
              key={task.title}
              onShowOverlay={onShowOverlay}
              onSelectedTask={onSelectedTask}
            />
          );
        })}
      </ul>
    </article>
  );
};

export default TasksContainer;
