import React from 'react';

interface Task {
    id: number;
    title: string;
    date: string;
    type?: string;
}

interface TaskCardProps {
    task: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
    return (
        <div className="bg-white p-3 rounded-lg shadow-md">
            <p className="font-semibold">{task.title}</p>
            <p className="text-gray-600">{task.date}</p>
            {task.type && <p className="text-blue-600">{task.type}</p>}
        </div>
    );
};

export default TaskCard;