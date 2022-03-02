import React from 'react';

type Props = {
  inputText: string;
  taskList: { text: string }[];
};

export const Tasks: React.FC<Props> = ({ inputText, taskList }) => {
  return (
    <div>
      {taskList.map((task) => (
        <div>{task.text}</div>
      ))}
    </div>
  );
};
