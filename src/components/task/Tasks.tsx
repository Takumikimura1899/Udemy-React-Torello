import React from 'react';
import { Task } from './Task';

type Props = {
  taskList: Task[];
  setTaskList: React.Dispatch<React.SetStateAction<Task[]>>;
};

export const Tasks: React.FC<Props> = ({ taskList, setTaskList }) => {
  return (
    <div>
      {taskList.map((task) => (
        <div key={task.id}>
          <Task task={task} taskList={taskList} setTaskList={setTaskList} />
        </div>
      ))}
    </div>
  );
};
