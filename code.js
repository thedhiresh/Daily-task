import { useState } from 'react';

interface Task {
  id: number;
  title: string;
  note: string;
  alarm: Date;
}

interface Alarm {
  hours: number;
  minutes: number;
}

const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskNote, setNewTaskNote] = useState('');
  const [alarm, setAlarm] = useState<Alarm>({ hours: 0, minutes: 0 });
  const [showAlarm, setShowAlarm] = useState(false);

  const handleAddTask = () => {
    const newTask: Task = {
      id: tasks.length + 1,
      title: newTaskTitle,
      note: newTaskNote,
      alarm: new Date(new Date().setHours(alarm.hours, alarm.minutes)),
    };
    setTasks([...tasks, newTask]);
    setNewTaskTitle('');
    setNewTaskNote('');
    setAlarm({ hours: 0, minutes: 0 });
  };

  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-md shadow-md">
      <h1 className="text-3xl font-bold mb-4">Task List</h1>
      <form className="mb-4">
        <input
          type="text"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          placeholder="Task title"
          className="block w-full p-2 mb-2 border border-gray-300 rounded-md"
        />
        <textarea
          value={newTaskNote}
          onChange={(e) => setNewTaskNote(e.target.value)}
          placeholder="Task note"
          className="block w-full p-2 mb-2 border border-gray-300 rounded-md"
        />
        <div className="flex items-center mb-2">
          <input
            type="checkbox"
            checked={showAlarm}
            onChange={() => setShowAlarm(!showAlarm)}
            className="mr-2"
          />
          <label>Set alarm</label>
        </div>
        {showAlarm && (
          <div className="flex items-center mb-2">
            <input
              type="number"
              value={alarm.hours}
              onChange={(e) => setAlarm({ ...alarm, hours: parseInt(e.target.value) })}
              placeholder="Hours"
              className="block w-20 p-2 mr-2 border border-gray-300 rounded-md"
            />
            <input
              type="number"
              value={alarm.minutes}
              onChange={(e) => setAlarm({ ...alarm, minutes: parseInt(e.target.value) })}
              placeholder="Minutes"
              className="block w-20 p-2 border border-gray-300 rounded-md"
            />
          </div>
        )}
        <button
          type="button"
          onClick={handleAddTask}
          className="block w-full p-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md"
        >
          Add task
        </button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="mb-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold">{task.title}</h2>
              <button
                type="button"
                onClick={() => handleDeleteTask(task.id)}
                className="p-2 bg-red-500 hover:bg-red-700 text-white rounded-md"
              >
                Delete
              </button>
            </div>
            <p className="text-gray-600">{task.note}</p>
            <p className="text-gray-600">
              Alarm: {task.alarm.toLocaleTimeString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
