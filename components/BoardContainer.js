import Header from './Header';
import TasksContainer from './TasksContainer.js';
import { useState } from 'react';

const BoardContainer = ({ board }) => {
  /** * !  board = {name: 'Platform Launch', columns: Array(3)} */

  return (
    <section className="px-6">
      <ul className="flex">
        {board.columns.map((column, i) => {
          return (
            <TasksContainer
              columnName={column.name}
              tasks={column.tasks}
              key={column.name}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default BoardContainer;
