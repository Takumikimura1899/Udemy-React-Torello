import React, { useState } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { AddTaskCardButton } from './button/AddTaskCardButton';
import { TaskCard } from './TaskCard';
import { reorder } from './Tasks';

export const TaskCards = () => {
  const [taskCardsList, setTaskCardsList] = useState<TaskCard[]>([
    { id: '0', draggableId: 'item0' },
  ]);

  const handleDragEnd = (result: DropResult) => {
    const reorderedTaskCardsList = reorder<TaskCard>(
      taskCardsList,
      result.source.index,
      result.destination!.index
    );

    setTaskCardsList(reorderedTaskCardsList);
  };
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId='droppable' direction='horizontal'>
        {(provided) => (
          <div
            className='taskCardsArea'
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {taskCardsList.map((taskCard, index) => (
              <TaskCard
                key={taskCard.id}
                index={index}
                taskCardsList={taskCardsList}
                setTaskCardsList={setTaskCardsList}
                taskCard={taskCard}
              />
            ))}
            {provided.placeholder}
            <AddTaskCardButton
              taskCardsList={taskCardsList}
              setTaskCardsList={setTaskCardsList}
            />
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
