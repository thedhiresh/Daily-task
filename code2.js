import { useState } from 'react';
import { Button } from "/components/ui/button";
import { Input } from "/components/ui/input";
import { Label } from "/components/ui/label";
import { Textarea } from "/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "/components/ui/card";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [newNote, setNewNote] = useState('');
  const [alarmTime, setAlarmTime] = useState('');
  const [alarmOn, setAlarmOn] = useState(false);

  const handleAddTask = () => {
    setTasks([...tasks, { task: newTask, note: newNote, alarmTime }]);
    setNewTask('');
    setNewNote('');
    setAlarmTime('');
  };

  const handleAlarm = (alarmTime) => {
    const alarm = new Date(alarmTime);
    const now = new Date();
    if (alarm > now) {
      setTimeout(() => {
        alert('Alarm!');
      }, alarm - now);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Task List</CardTitle>
          <CardDescription>Add tasks and notes, and set alarms</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-2">
            <div className="flex flex-col space-y-1">
              <Label htmlFor="task">Task</Label>
              <Input id="task" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
            </div>
            <div className="flex flex-col space-y-1">
              <Label htmlFor="note">Note</Label>
              <Textarea id="note" value={newNote} onChange={(e) => setNewNote(e.target.value)} />
            </div>
            <div className="flex flex-col space-y-1">
              <Label htmlFor="alarm">Alarm Time</Label>
              <Input id="alarm" type="datetime-local" value={alarmTime} onChange={(e) => setAlarmTime(e.target.value)} />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleAddTask}>Add Task</Button>
          <Button variant="secondary" onClick={() => handleAlarm(alarmTime)}>Set Alarm</Button>
        </CardFooter>
      </Card>
      <div className="mt-4">
        <h2 className="text-lg font-bold">Tasks</h2>
        <ul className="list-none p-0 m-0">
          {tasks.map((task, index) => (
            <li key={index} className="flex justify-between items-center p-2 border-b border-gray-200">
              <span>{task.task}</span>
              <span>{task.note}</span>
              <span>{task.alarmTime}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskList;
