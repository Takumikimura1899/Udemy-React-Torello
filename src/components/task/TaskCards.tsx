import React, { useState } from 'react';
import { AddTaskCardButton } from './button/AddTaskCardButton';
import { TaskCard } from './TaskCard';

export const TaskCards = () => {
  const [taskCardsList, setTaskCardsList] = useState<TaskCard[]>([]);
  return (
    <div className='taskCardsArea'>
      {taskCardsList.map((taskCardList) => (
        <TaskCard key={taskCardList.id} />
      ))}
      <AddTaskCardButton
        taskCardsList={taskCardsList}
        setTaskCardsList={setTaskCardsList}
      />
    </div>
  );
};
