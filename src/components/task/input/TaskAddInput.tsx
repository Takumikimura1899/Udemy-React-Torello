import React from 'react';
import { Task } from '../Task';
import { v4 as uuidv4 } from 'uuid';

type Props = {
  inputText: string;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
  taskList: Task[];
  setTaskList: React.Dispatch<React.SetStateAction<Task[]>>;
};

export const TaskAddInput: React.FC<Props> = ({
  inputText,
  taskList,
  setInputText,
  setTaskList,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    const taskId = uuidv4();
    e.preventDefault();
    if (inputText === '') return;
    setTaskList([
      ...taskList,
      {
        id: taskId,
        draggableId: `task-${taskId}`,
        text: inputText,
      },
    ]);
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
