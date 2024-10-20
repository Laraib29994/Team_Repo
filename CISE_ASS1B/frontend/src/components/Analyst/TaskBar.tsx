// src/components/TaskBar.tsx
import React from 'react';

interface TaskBarProps {
  filterApproved: () => void;
}

const TaskBar: React.FC<TaskBarProps> = ({ filterApproved }) => {
  return (
    <div className="taskbar">
      <button onClick={filterApproved}>Show Approved Articles</button>
    </div>
  );
};

export default TaskBar;
