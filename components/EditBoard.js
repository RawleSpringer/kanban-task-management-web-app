import { useState } from 'react';

const EditBoard = ({ board }) => {
  const [editBoardName, setEditBoardName] = useState(board.name);
  const [editBoardColumns, setEditBoardNameColumns] = useState(board.columns);

  const editBoardNameHandler = (e) => {
    setEditBoardName(e.target.value);
  };

  const editBoardColumnsHandler = (e) => {
    setEditBoardColumns([]);
  };

  console.log(editBoardName);

  return (
    <form className="w-480 bg-white h-auto p-8 space-y-6 z-20 absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-sm">
      <h1 className="text-xl font-bold">Edit Board</h1>
      <p className="flex flex-col">
        <label htmlFor="" className="text-sm mb-2 text-medium-grey">
          Board Name
        </label>
        <input
          type="text"
          className="text-medium-grey pl-4  border border-light-lines h-10"
          value={editBoardName}
          onChange={editBoardNameHandler}
        />
      </p>
      <p className="flex flex-col">
        <label htmlFor="" className="text-sm mb-2 text-medium-grey">
          Board Columns
        </label>

        {board.columns.map((columnn) => {
          return (
            <p className="flex items-center mb-3" key={columnn.name}>
              <input
                type="text"
                className="text-medium-grey pl-4  border border-light-lines h-10 mr-3 w-full"
                onChange={editBoardNameHandler}
              />
              <img src="/assets/icon-cross.svg" alt="" className="w-4 h-4" />
            </p>
          );
        })}

        <button className="bg-main-purple bg-opacity-10 text-main-purple text-lg py-2 rounded-3xl">
          +Add New Column
        </button>
      </p>
      <p>
        <button className="bg-main-purple text-white text-lg py-2 rounded-3xl  w-full">
          Save Changes
        </button>
      </p>
    </form>
  );
};

export default EditBoard;
