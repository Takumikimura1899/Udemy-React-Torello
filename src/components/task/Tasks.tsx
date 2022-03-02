import React from 'react';
import { Task } from './Task';

type Props = {
  taskList: { text: string }[];
};

export const Tasks: React.FC<Props> = ({ taskList }) => {
  return (
    <div>
      {taskList.map((task) => (
        <div>
          <Task task={task} />
        </div>
      ))}
    </div>
  );
};
