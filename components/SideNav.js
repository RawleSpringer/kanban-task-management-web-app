const SideNav = ({
  boardNames,
  onShowSideNav,
  onAddBoard,
  onEditBoard,
  onSelectBoard,
  selectedBoard,
}) => {
  const handleClick = () => {
    onShowSideNav();
  };

  const handleNewBoard = () => {
    onAddBoard();
  };

  const handleEditBoard = (e) => {
    onEditBoard(e.target.innerHTML);
  };

  const handleSelectBoard = (e) => {
    onSelectBoard(e.target.innerHTML);
  };

  return (
    <aside className="bg-white flex-none w-1/4 h-full pt-8">
      <ul className="flex flex-col justify-between">
        <li>
          <p className="mb-8 ml-6">ALL BOARDS (3)</p>
          <nav className="w-full">
            <ul>
              {boardNames.map((boardName) => {
                return (
                  <li
                    className={` w-276 h-12 flex mb-6 items-center cursor-pointer ${
                      selectedBoard === boardName
                        ? 'bg-main-purple text-white rounded-r-full'
                        : ''
                    }`}
                    key={boardName}
                    onClick={handleSelectBoard}
                    onDoubleClick={handleEditBoard}
                  >
                    <img
                      src="/assets/icon-board.svg"
                      alt=""
                      className="h-4 w-4 mr-4 ml-6 "
                    />
                    <p className="">{boardName}</p>
                  </li>
                );
              })}
              <li className="flex mb-6 items-center">
                <img
                  src="/assets/icon-board.svg"
                  alt=""
                  className="h-4 w-4 mr-4 ml-6  fill-main-purple"
                />
                <p
                  className=" text-main-purple cursor-pointer"
                  onClick={handleNewBoard}
                >
                  +Create New Board
                </p>
              </li>
            </ul>
          </nav>
        </li>
        <li>
          <p className="h-12 ml-6 bg-light-grey flex justify-center items-center">
            <img
              src="/assets/icon-light-theme.svg"
              alt=""
              className="h-4 w-4 mr-4"
            />

            <img
              src="/assets/icon-dark-theme.svg"
              alt=""
              className="h-4 w-4 mr-4"
            />
          </p>
          <p className="flex items-center ml-6">
            <img
              src="/assets/icon-hide-sidebar.svg"
              alt=""
              className="h-4 w-4 mr-4 cursor-pointer"
              onClick={handleClick}
            />
            <p>Hide Sidebar</p>
          </p>
        </li>
      </ul>
    </aside>
  );
};

export default SideNav;
