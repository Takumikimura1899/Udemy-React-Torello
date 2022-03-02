import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

type Props = {
  task: { text: string };
};

export const Task: React.FC<Props> = ({ task }) => {
  return (
    <div className='taskBox'>
      <p className='taskText'>
        {task.text}
        <FaTrashAlt />
      </p>
    </div>
  );
};
