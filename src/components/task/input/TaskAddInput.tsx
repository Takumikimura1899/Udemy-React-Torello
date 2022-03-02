import React, { FormEventHandler } from 'react';

export const TaskAddInput = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <div>
      <form action='' onSubmit={handleSubmit}>
        <input type='text' placeholder='add a task' className='taskAddInput' />
      </form>
    </div>
  );
};
