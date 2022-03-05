import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { FaTrashAlt } from 'react-icons/fa';

export type Task = {
  text: string;
  id: number;
  draggableId?: string;
};

type Props = {
  index: number;
  task: Task;
  taskList: Task[];
  setTaskList: React.Dispatch<React.SetStateAction<Task[]>>;
};

export const Task: React.FC<Props> = ({
  index,
  task,
  taskList,
  setTaskList,
}) => {
  const handleDelete = (id: number) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };
  return (
    <Draggable index={index} draggableId={task.draggableId!}>
      {(provided) => (
        <div
          className='taskBox'
          key={task.id}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <p className='taskText'>{task.text}</p>
          <button
            className='taskTrashButton'
            onClick={() => handleDelete(task.id)}
          >
            <FaTrashAlt />
          </button>
        </div>
      )}
    </Draggable>
  );
};
