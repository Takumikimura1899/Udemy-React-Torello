import React, { useState } from 'react';
import { TaskAddInput } from './input/TaskAddInput';
import { TaskCardDeleteButton } from './button/TaskCardDeleteButton';
import { TaskCardTitle } from './TaskCardTitle';
import { Tasks } from './Tasks';
import { Task } from './Task';

export type TaskCard = {
  id: number | string;
  draggableId: string;
};

type Props = {
  taskCardsList: TaskCard[];
  setTaskCardsList: React.Dispatch<React.SetStateAction<TaskCard[]>>;
  taskCard: TaskCard;
};

export const TaskCard: React.FC<Props> = ({
  taskCardsList,
  setTaskCardsList,
  taskCard,
}) => {
  const [inputText, setInputText] = useState<string>('');
  const [taskList, setTaskList] = useState<Task[]>([]);
  return (
    <div className='taskCard'>
      <div className='taskCardTitleAndTaskCardDeleteButtonArea'>
        <TaskCardTitle />
        <TaskCardDeleteButton
          taskCardsList={taskCardsList}
          setTaskCardsList={setTaskCardsList}
          taskCard={taskCard}
        />
      </div>
      <TaskAddInput
        inputText={inputText}
        setInputText={setInputText}
        taskList={taskList}
        setTaskList={setTaskList}
      />
      <Tasks taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
};
