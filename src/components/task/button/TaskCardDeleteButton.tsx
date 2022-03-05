import React from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';

export const TaskCardDeleteButton = () => {
  return (
    <div>
      <button className='taskCardDeleteButton'>
        <AiFillCloseCircle />
      </button>
    </div>
  );
};
