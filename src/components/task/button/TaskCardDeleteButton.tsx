import React from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { TaskCard } from '../TaskCard';

type Props = {
  taskCardsList: TaskCard[];
  setTaskCardsList: React.Dispatch<React.SetStateAction<TaskCard[]>>;
  taskCard: TaskCard;
};

export const TaskCardDeleteButton: React.FC<Props> = ({
  taskCardsList,
  setTaskCardsList,
  taskCard,
}) => {
  const taskCardDeleteButton: (id: number | string) => void = (id) => {
    setTaskCardsList(taskCardsList.filter((e) => e.id !== id));
  };
  return (
    <div>
      <button
        className='taskCardDeleteButton'
        onClick={() => taskCardDeleteButton(taskCard.id)}
      >
        <AiFillCloseCircle />
      </button>
    </div>
  );
};
