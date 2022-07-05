const SideNav = ({ boardNames, onShowSideNav }) => {
  const handleClick = () => {
    console.log('clicked');
    onShowSideNav();
  };

  return (
    <aside className="bg-white flex-none w-60 h-full pl-6 pt-8">
      <ul className="flex flex-col justify-between">
        <li>
          <p className="mb-8">ALL BOARDS (3)</p>
          <nav className="w-full">
            <ul>
              {boardNames.map((boardName) => {
                return (
                  <li
                    className="flex mb-6 items-center cursor-pointer"
                    key={boardName}
                  >
                    <img
                      src="/assets/icon-board.svg"
                      alt=""
                      className="h-4 w-4 mr-4"
                    />
                    <p>{boardName}</p>
                  </li>
                );
              })}
              <li className="flex mb-6 items-center">
                <img
                  src="/assets/icon-board.svg"
                  alt=""
                  className="h-4 w-4 mr-4 fill-main-purple"
                />
                <p className=" text-main-purple cursor-pointer">
                  +Create New Board
                </p>
              </li>
            </ul>
          </nav>
        </li>
        <li>
          <p className="h-12 bg-light-grey flex justify-center items-center">
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
          <p className="flex items-center">
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
