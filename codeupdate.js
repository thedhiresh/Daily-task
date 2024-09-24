import React, { useState } from 'react';
import { FaTasks, FaStickyNote, FaPlus, FaUser, FaBell } from 'react-icons/fa';

function App() {
  const [tasks, setTasks] = useState([]);
  const [notes, setNotes] = useState([]);
  const [taskTitle, setTaskTitle] = useState('');
  const [taskNote, setTaskNote] = useState('');
  const [noteTitle, setNoteTitle] = useState('');
  const [note, setNote] = useState('');
  const [alarm, setAlarm] = useState('');
  const [activeTab, setActiveTab] = useState('tasks');
  const [profileName, setProfileName] = useState('John Doe');
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [alarmRingtone, setAlarmRingtone] = useState('');

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

  const handleProfilePhotoChange = (e) => {
    const file = e.target.files[0];
    setProfilePhoto(URL.createObjectURL(file));
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <div className="bg-blue-600 text-white p-4 text-center">
        <h1 className="text-3xl font-bold">Task Manager</h1>
      </div>

      {/* Profile Section */}
      <div className="p-4 flex items-center justify-center bg-white shadow-md mb-4">
        <div className="flex items-center">
          <img
            src={profilePhoto || 'https://via.placeholder.com/100'}
            alt="Profile"
            className="rounded-full w-20 h-20 object-cover mr-4"
          />
          <div>
            <input
              type="text"
              value={profileName}
              onChange={(e) => setProfileName(e.target.value)}
              className="text-lg font-bold bg-transparent border-none"
              placeholder="Your Name"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleProfilePhotoChange}
              className="mt-2"
            />
          </div>
        </div>
        <div className="ml-4">
          <label htmlFor="alarm-ringtone" className="text-lg">
            Set Alarm Ringtone:
          </label>
          <input
            id="alarm-ringtone"
            type="text"
            value={alarmRingtone}
            onChange={(e) => setAlarmRingtone(e.target.value)}
            placeholder="Enter Ringtone URL"
            className="mt-2 w-full p-2 border border-gray-300"
          />
        </div>
      </div>

      {/* Tabs for Tasks, Notes, Add Task, Add Note */}
      <div className="flex-1 overflow-y-scroll p-4">
        {activeTab === 'tasks' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Tasks</h2>
            <ul>
              {tasks.map((task, index) => (
                <li key={index} className="bg-white shadow-md p-4 mb-4 rounded-md">
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
                <li key={index} className="bg-white shadow-md p-4 mb-4 rounded-md">
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
              className="block w-full p-2 mb-4 border border-gray-400 rounded-md"
            />
            <textarea
              value={taskNote}
              onChange={(e) => setTaskNote(e.target.value)}
              placeholder="Task Note"
              className="block w-full p-2 mb-4 border border-gray-400 rounded-md"
            />
            <input
              type="datetime-local"
              value={alarm}
              onChange={(e) => setAlarm(e.target.value)}
              placeholder="Alarm"
              className="block w-full p-2 mb-4 border border-gray-400 rounded-md"
            />
            <button
              onClick={handleAddTask}
              className="bg-green-500 text-white p-2 rounded-md"
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
              className="block w-full p-2 mb-4 border border-gray-400 rounded-md"
            />
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Note"
              className="block w-full p-2 mb-4 border border-gray-400 rounded-md"
            />
            <button
              onClick={handleAddNote}
              className="bg-green-500 text-white p-2 rounded-md"
            >
              Add Note
            </button>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="bg-gray-300 p-4 text-center fixed bottom-0 w-full shadow-lg">
        <div className="flex justify-around">
          <button
            onClick={() => setActiveTab('tasks')}
            className={`p-2 rounded-full ${
              activeTab === 'tasks' ? 'bg-blue-600 text-white' : 'text-blue-600'
            }`}
          >
            <FaTasks className="h-6 w-6" />
          </button>
          <button
            onClick={() => setActiveTab('notes')}
            className={`p-2 rounded-full ${
              activeTab === 'notes' ? 'bg-blue-600 text-white' : 'text-blue-600'
            }`}
          >
            <FaStickyNote className="h-6 w-6" />
          </button>
          <button
            onClick={() => setActiveTab('add-task')}
            className={`p-2 rounded-full ${
              activeTab === 'add-task' ? 'bg-blue-600 text-white' : 'text-blue-600'
            }`}
          >
            <FaPlus className="h-6 w-6" />
          </button>
          <button
            onClick={() => setActiveTab('add-note')}
            className={`p-2 rounded-full ${
              activeTab === 'add-note' ? 'bg-blue-600 text-white' : 'text-blue-600'
            }`}
          >
            <FaBell className="h-6 w-6" />
          </button>
          <button
            onClick={() => setActiveTab('profile')}
            className={`p-2 rounded-full ${
              activeTab === 'profile' ? 'bg-blue-600 text-white' : 'text-blue-600'
            }`}
          >
            <FaUser className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
