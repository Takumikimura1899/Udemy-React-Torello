import React from 'react';
import { TaskCard } from '../TaskCard';
import { v4 as uuidv4 } from 'uuid';

type Props = {
  taskCardsList: TaskCard[];
  setTaskCardsList: any;
};

export const AddTaskCardButton: React.FC<Props> = ({
  taskCardsList,
  setTaskCardsList,
}) => {
  const addTaskCard = () => {
    const taskCardId = uuidv4();
    setTaskCardsList([
      ...taskCardsList,
      { id: taskCardId, draggableId: `item${taskCardId}` },
    ]);
  };
  return (
    <div className='addTaskCardButtonArea'>
      <button className='addTaskCardButton' onClick={addTaskCard}>
        +
      </button>
    </div>
  );
};
