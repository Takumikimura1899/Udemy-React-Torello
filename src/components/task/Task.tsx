import React from 'react';

type Props = {
  task: { text: string };
};

export const Task: React.FC<Props> = ({ task }) => {
  return (
    <div className='taskBox'>
      <p className='taskText'>{task.text}</p>
    </div>
  );
};
