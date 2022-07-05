const NewTask = () => {
  return (
    <form
      action=""
      className="w-480 bg-white h-auto p-8 space-y-6 z-20 absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-sm"
    >
      <h1 className="text-xl font-bold">Add New Task</h1>
      <p className="flex flex-col">
        <label htmlFor="" className="text-sm mb-2 text-medium-grey">
          Title
        </label>
        <input
          type="text"
          className="text-medium-grey  border border-light-lines h-10"
        />
      </p>
      <p className="flex flex-col">
        <label htmlFor="" className="text-sm mb-2 text-medium-grey">
          Description
        </label>
        <input
          type="text"
          className="text-medium-grey  border border-light-lines h-28"
        />
      </p>
      <p className="flex flex-col">
        <label htmlFor="" className="text-sm mb-2 text-medium-grey">
          Subtasks
        </label>
        <p className="flex items-center mb-3">
          <input
            type="text"
            className="text-medium-grey  border border-light-lines h-10 mr-3 w-full"
          />
          <img src="/assets/icon-cross.svg" alt="" className="w-4 h-4" />
        </p>
        <p className="flex items-center mb-3">
          <input
            type="text"
            className="text-medium-grey  border border-light-lines h-10 mr-3 w-full"
          />
          <img src="/assets/icon-cross.svg" alt="" className="w-4 h-4" />
        </p>
        <button className="bg-main-purple bg-opacity-10 text-main-purple text-lg py-2 rounded-3xl">
          +Add New Subtask
        </button>
      </p>
      <p className="flex flex-col">
        <label htmlFor="" className="text-sm text-medium-grey mb-2">
          Status
        </label>
        <input
          type="text"
          className="text-medium-grey  border border-light-lines h-10"
        />
      </p>
      <p>
        <button className="bg-main-purple text-white text-lg py-2 rounded-3xl  w-full">
          Create Task
        </button>
      </p>
    </form>
  );
};

export default NewTask;
