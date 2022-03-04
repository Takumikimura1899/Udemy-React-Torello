import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

export type Task = {
  text: string;
  id: number;
};

type Props = {
  task: Task;
  taskList: Task[];
  setTaskList: React.Dispatch<React.SetStateAction<Task[]>>;
};

export const Task: React.FC<Props> = ({ task, taskList, setTaskList }) => {
  const handleDelete = (id: number) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };
  return (
    <div className='taskBox'>
      <p className='taskText'>{task.text}</p>
      <button className='taskTrashButton' onClick={() => handleDelete(task.id)}>
        <FaTrashAlt />
      </button>
    </div>
  );
};
