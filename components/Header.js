const Header = () => {
  return (
    <header className="">
      <ul className="flex justify-between px-10  items-center h-24">
        <li className="flex h-6 w-36">
          <img src="/assets/logo-dark.svg" alt="" />
        </li>
        <li className="flex-1 ml-8">
          <p className="text-2xl text-black">Platform Launch</p>
        </li>
        <li className="flex justify-center items-center">
          <button className=" bg-lime-500 px-4 py-2 mr-6 h-12 w-40 rounded-full bg-main-purple text-white">
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
