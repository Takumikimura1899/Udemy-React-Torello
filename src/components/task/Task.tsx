import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

type Props = {
  task: { text: string };
};

export const Task: React.FC<Props> = ({ task }) => {
  const handleDelete = () => {};
  return (
    <div className='taskBox'>
      <p className='taskText'>{task.text}</p>
      <button className='taskTrashButton' onClick={() => handleDelete}>
        <FaTrashAlt />
      </button>
    </div>
  );
};
