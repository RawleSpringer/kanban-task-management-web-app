import Task from './Task';

const TasksContainer = ({ columnName, tasks }) => {
  //* * ! columns = {title: 'Build UI for onboarding flow', description: '', status: 'Todo', subtasks: Array(3)} /

  const allCapsColumnName = columnName.toUpperCase();
  return (
    <article>
      <p className="flex items-center">
        <span className="w-3.5 h-3.5 bg-green rounded-md mr-3"></span>
        <h2>{allCapsColumnName}</h2>
      </p>

      <ul>
        {tasks.map((task) => {
          return <Task task={task} key={task.title} />;
        })}
      </ul>
    </article>
  );
};

export default TasksContainer;
