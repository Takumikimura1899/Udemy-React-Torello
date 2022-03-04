import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { Task } from './Task';

type Props = {
  taskList: Task[];
  setTaskList: React.Dispatch<React.SetStateAction<Task[]>>;
};

export const Tasks: React.FC<Props> = ({ taskList, setTaskList }) => {
  return (
    <>
      <DragDropContext onDragEnd={() => {}}>
        <Droppable droppableId='droppable'>
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {taskList.map((task) => (
                <div key={task.id}>
                  <Task
                    task={task}
                    taskList={taskList}
                    setTaskList={setTaskList}
                  />
                </div>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};
