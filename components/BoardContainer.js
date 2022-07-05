import Header from './Header';
import TasksContainer from './TasksContainer.js';
import { useState } from 'react';

const BoardContainer = ({ board, onShowOverlay, onSelectedTask }) => {
  /** * !  board = {name: 'Platform Launch', columns: Array(3)} */

  return (
    <section className="px-6 pt-8">
      <ul className="flex">
        {board.columns.map((column, i) => {
          return (
            <TasksContainer
              columnName={column.name}
              tasks={column.tasks}
              key={column.name}
              onShowOverlay={onShowOverlay}
              onSelectedTask={onSelectedTask}
            />
          );
        })}
        <li className=" bg-light-lines  w-72 flex items-center justify-center text-2xl text-medium-grey">
          + New Column
        </li>
      </ul>
    </section>
  );
};

export default BoardContainer;
