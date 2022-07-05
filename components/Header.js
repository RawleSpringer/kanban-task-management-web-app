const Header = ({ boardName, onShowSideNav, onShowNewTask }) => {
  const handleClick = () => {
    onShowSideNav();
  };
  const handleAddNewTask = () => {
    onShowNewTask();
  };

  return (
    <header className="bg-white">
      <ul className="flex justify-between items-center h-24 px-6">
        <li className="flex h-6 w-36">
          <img
            src="/assets/logo-dark.svg"
            alt=""
            className="cursor-pointer"
            onClick={handleClick}
          />
        </li>
        <li className="flex-1 ml-8">
          <p className="text-2xl text-black">{boardName}</p>
        </li>
        <li className="flex justify-center items-center">
          <button
            className=" bg-lime-500 px-4 py-2 mr-6 h-12 w-40 rounded-full bg-main-purple text-white"
            onClick={handleAddNewTask}
          >
            + Add New Task
          </button>
          <img
            src="/assets/icon-vertical-ellipsis.svg"
            alt=""
            className="h-5"
          />
        </li>
      </ul>
    </header>
  );
};

export default Header;
