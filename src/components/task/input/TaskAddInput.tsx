import React, { FormEventHandler } from 'react';

type Props = {
  inputText: string;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
  taskList: never[];
  setTaskList: React.Dispatch<React.SetStateAction<never[]>>;
};

export const TaskAddInput: React.FC<Props> = ({
  inputText,
  taskList,
  setInputText,
  setTaskList,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };
  return (
    <div>
      <form action='' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='add a task'
          className='taskAddInput'
          onChange={handleChange}
        />
        <p></p>
      </form>
    </div>
  );
};
