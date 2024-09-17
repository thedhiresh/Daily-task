import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [notes, setNotes] = useState([]);
  const [taskTitle, setTaskTitle] = useState('');
  const [taskNote, setTaskNote] = useState('');
  const [noteTitle, setNoteTitle] = useState('');
  const [note, setNote] = useState('');
  const [alarm, setAlarm] = useState('');
  const [activeTab, setActiveTab] = useState('tasks');

  const handleAddTask = () => {
    setTasks([...tasks, { title: taskTitle, note: taskNote, alarm: alarm }]);
    setTaskTitle('');
    setTaskNote('');
    setAlarm('');
  };

  const handleAddNote = () => {
    setNotes([...notes, { title: noteTitle, note: note }]);
    setNoteTitle('');
    setNote('');
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="bg-blue-500 text-white p-4 text-center">
        <h1 className="text-3xl font-bold">Task Manager</h1>
      </div>
      <div className="flex-1 overflow-y-scroll p-4">
        {activeTab === 'tasks' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Tasks</h2>
            <ul>
              {tasks.map((task, index) => (
                <li key={index} className="bg-white shadow-md p-4 mb-4">
                  <h3 className="text-lg font-bold">{task.title}</h3>
                  <p>{task.note}</p>
                  <p>Alarm: {task.alarm}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
        {activeTab === 'notes' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Notes</h2>
            <ul>
              {notes.map((note, index) => (
                <li key={index} className="bg-white shadow-md p-4 mb-4">
                  <h3 className="text-lg font-bold">{note.title}</h3>
                  <p>{note.note}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
        {activeTab === 'add-task' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Add Task</h2>
            <input
              type="text"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              placeholder="Task Title"
              className="block w-full p-2 mb-4 border border-gray-400"
            />
            <textarea
              value={taskNote}
              onChange={(e) => setTaskNote(e.target.value)}
              placeholder="Task Note"
              className="block w-full p-2 mb-4 border border-gray-400"
            />
            <input
              type="datetime-local"
              value={alarm}
              onChange={(e) => setAlarm(e.target.value)}
              placeholder="Alarm"
              className="block w-full p-2 mb-4 border border-gray-400"
            />
            <button
              onClick={handleAddTask}
              className="bg-blue-500 text-white p-2 rounded"
            >
              Add Task
            </button>
          </div>
        )}
        {activeTab === 'add-note' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Add Note</h2>
            <input
              type="text"
              value={noteTitle}
              onChange={(e) => setNoteTitle(e.target.value)}
              placeholder="Note Title"
              className="block w-full p-2 mb-4 border border-gray-400"
            />
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Note"
              className="block w-full p-2 mb-4 border border-gray-400"
            />
            <button
              onClick={handleAddNote}
              className="bg-blue-500 text-white p-2 rounded"
            >
              Add Note
            </button>
          </div>
        )}
      </div>
      <div className="bg-gray-200 p-4 text-center fixed bottom-0 w-full">
        <div className="flex justify-around">
          <button
            onClick={() => setActiveTab('tasks')}
            className="bg-blue-500 text-white p-2 rounded"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
              />
            </svg>
            Tasks
          </button>
          <button
            onClick={() => setActiveTab('notes')}
            className="bg-blue-500 text-white p-2 rounded"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              />
            </svg>
            Notes
          </button>
          <button
            onClick={() => setActiveTab('add-task')}
            className="bg-blue-500 text-white p-2 rounded"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Add Task
          </button>
          <button
            onClick={() => setActiveTab('add-note')}
            className="bg-blue-500 text-white p-2 rounded"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v12m-3-2h14m-5 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Add Note
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
