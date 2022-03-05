import React, { useState } from 'react';
import { TaskAddInput } from './input/TaskAddInput';
import { TaskCardDeleteButton } from './button/TaskCardDeleteButton';
import { TaskCardTitle } from './TaskCardTitle';
import { Tasks } from './Tasks';
import { Task } from './Task';
import { Draggable } from 'react-beautiful-dnd';

export type TaskCard = {
  id: string;
  draggableId: string;
};

type Props = {
  index: number;
  taskCardsList: TaskCard[];
  setTaskCardsList: React.Dispatch<React.SetStateAction<TaskCard[]>>;
  taskCard: TaskCard;
};

export const TaskCard: React.FC<Props> = ({
  index,
  taskCardsList,
  setTaskCardsList,
  taskCard,
}) => {
  const [inputText, setInputText] = useState<string>('');
  const [taskList, setTaskList] = useState<Task[]>([]);
  return (
    <Draggable draggableId={taskCard.id} index={index}>
      {(provided) => (
        <div
          className='taskCard'
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <div
            className='taskCardTitleAndTaskCardDeleteButtonArea'
            {...provided.dragHandleProps}
          >
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
      )}
    </Draggable>
  );
};
