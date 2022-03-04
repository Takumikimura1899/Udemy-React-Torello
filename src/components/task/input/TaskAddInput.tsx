import React from 'react';

type Props = {
  inputText: string;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
  taskList: { id: number; text: string }[];
  setTaskList: React.Dispatch<
    React.SetStateAction<{ id: number; text: string }[]>
  >;
};

export const TaskAddInput: React.FC<Props> = ({
  inputText,
  taskList,
  setInputText,
  setTaskList,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputText === '') return;
    setTaskList([...taskList, { id: taskList.length, text: inputText }]);
    setInputText('');
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
          value={inputText}
        />
        <p></p>
      </form>
    </div>
  );
};
