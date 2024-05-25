import React, {useState} from 'react'

export const TaskManager = () => {
    const [task, setTask] = useState({ name: '', description: '' });
    const [tasks, setTasks] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTask((prevTask) => ({ ...prevTask, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setTasks((prevTasks) => [...prevTasks, task]);
        setTask({ name: '', description: '' });
    };

  return (
      <div className='container-page'>
          <h2 className='title-page'>Things to do</h2>
          <form onSubmit={handleSubmit} className="space-y-2">
              {['name', 'description'].map((field) => (
                  <input
                      key={field}
                      type="text"
                      name={field}
                      placeholder={field === 'name' ? 'Nombre de la tarea' : 'Descripción'}
                      value={task[field]}
                      onChange={handleChange}
                      className="border p-2 block w-full"
                  />
              ))}
              <button type="submit" className="bg-blue-500 text-white px-4 py-2">
                  Guardar Tarea
              </button>
          </form>
          <ul className="mt-4 space-y-2">
              {tasks.map((t, index) => (
                  <li key={index} className="border p-2">
                      <h3 className="font-bold">{t.name}</h3>
                      <p>{t.description}</p>
                  </li>
              ))}
          </ul>
      </div>
  )
}
