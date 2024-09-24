import React, { useState } from 'react';
import { FaTasks, FaCalendarAlt, FaEnvelope, FaUsers } from 'react-icons/fa';

function App() {
  const [profileName, setProfileName] = useState('Akash Khandavilli');
  const [location, setLocation] = useState('Vizag, India');
  const [followers, setFollowers] = useState(221);
  const [following, setFollowing] = useState(32);
  const [tasksToDo, setTasksToDo] = useState(22);
  const [upcomingTasks, setUpcomingTasks] = useState(5);
  const [messages, setMessages] = useState(10);
  const [profileCompletion, setProfileCompletion] = useState(70);

  const [profilePhoto, setProfilePhoto] = useState(null);

  // Handle profile photo change (optional feature)
  const handleProfilePhotoChange = (e) => {
    const file = e.target.files[0];
    setProfilePhoto(URL.createObjectURL(file));
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100 items-center">
      {/* Profile Header */}
      <div className="bg-orange-500 w-full p-4 flex flex-col items-center text-white">
        <input
          type="file"
          accept="image/*"
          onChange={handleProfilePhotoChange}
          className="hidden"
          id="profile-pic-upload"
        />
        <label htmlFor="profile-pic-upload">
          <img
            src={profilePhoto || 'https://via.placeholder.com/100'}
            alt="Profile"
            className="rounded-full w-24 h-24 border-4 border-white object-cover mb-4"
          />
        </label>
        <h2 className="text-2xl font-bold">{profileName}</h2>
        <p className="text-sm">{location}</p>
        <p className="mt-2 font-medium text-white">"Live happy always"</p>
      </div>

      {/* Profile Stats */}
      <div className="bg-white shadow-lg w-11/12 p-4 mt-4 rounded-lg grid grid-cols-2 gap-4">
        <div className="text-center">
          <h3 className="text-lg font-bold text-gray-700">{tasksToDo}</h3>
          <p className="text-sm text-gray-500">Tasks To Do</p>
        </div>
        <div className="text-center">
          <h3 className="text-lg font-bold text-gray-700">{upcomingTasks}</h3>
          <p className="text-sm text-gray-500">Upcoming Tasks</p>
        </div>
        <div className="text-center">
          <h3 className="text-lg font-bold text-gray-700">{followers}</h3>
          <p className="text-sm text-gray-500">Followers</p>
        </div>
        <div className="text-center">
          <h3 className="text-lg font-bold text-gray-700">{following}</h3>
          <p className="text-sm text-gray-500">Following</p>
        </div>
      </div>

      {/* Profile Additional Information */}
      <div className="bg-white shadow-lg w-11/12 p-4 mt-4 rounded-lg grid grid-cols-2 gap-4">
        <div className="flex flex-col items-center text-center">
          <FaTasks className="text-orange-500 text-3xl mb-2" />
          <p className="text-sm">Tasks</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <FaCalendarAlt className="text-orange-500 text-3xl mb-2" />
          <p className="text-sm">Upcoming</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <FaEnvelope className="text-orange-500 text-3xl mb-2" />
          <p className="text-sm">Messages ({messages})</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <FaUsers className="text-orange-500 text-3xl mb-2" />
          <p className="text-sm">Followers</p>
        </div>
      </div>

      {/* Profile Completion */}
      <div className="bg-white shadow-lg w-11/12 p-4 mt-4 rounded-lg">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold">Profile Completion</p>
          <p className="text-sm font-semibold">{profileCompletion}%</p>
        </div>
        <div className="w-full bg-gray-300 rounded-full h-2.5 mt-2">
          <div
            className="bg-orange-500 h-2.5 rounded-full"
            style={{ width: `${profileCompletion}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default App;
