import React from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { Task } from './Task';

type Props = {
  taskList: Task[];
  setTaskList: React.Dispatch<React.SetStateAction<Task[]>>;
};

export const reorder: <T>(
  taskList: T[],
  startIndex: number,
  endIndex: number
) => T[] = (taskList, startIndex, endIndex) => {
  const dragEndTaskList = [...taskList];
  const [reorderedTask] = dragEndTaskList.splice(startIndex, 1);
  dragEndTaskList.splice(endIndex, 0, reorderedTask);
  return dragEndTaskList;
};

export const Tasks: React.FC<Props> = ({ taskList, setTaskList }) => {
  const handleDragEnd = (result: DropResult) => {
    // taskを並び替える
    const reorderedTaskList = reorder<Task>(
      taskList,
      result.source.index,
      result.destination!.index
    );

    setTaskList(reorderedTaskList);
  };

  return (
    <>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId='droppable'>
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {taskList.map((task, index) => (
                <div key={task.id}>
                  <Task
                    index={index}
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
