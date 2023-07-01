import { useState } from 'react';

import ListItem from './components/ListItem';

function App() {
  const [text, setText] = useState('');
  const [tasks, setTasks] = useState<string[]>([]); // * this is how you type an state in typescript with diamond operator

  function onAddItem() {
    setTasks([text, ...tasks]);
    setText('');
  }

  function onEnter(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') onAddItem();
  }

  function onDelete(indexToDelete: number) {
    tasks.splice(indexToDelete, 1);
    setTasks([...tasks]);
  }

  return (
    <>
      <div className='min-h-screen font-sans bg-neutral-900 text-white'>
        <div className='flex flex-wrap justify-center pt-5'>
          <div className='border border-slate-200 p-20'>
            <h1 className='text-center text-5xl pb-5'>TO-DO LIST 📝</h1>
            <div className='flex justify-between gap-5 py-5'>
              <input
                type='text'
                placeholder='Add Activities'
                className='border border-slate-800 grow rounded text-black'
                onChange={(event) => setText(event.target.value)}
                onKeyUp={onEnter}
                value={text}
              />
              <button
                type='submit'
                className='bg-slate-200 w-8 h-8 text-black rounded'
                onClick={onAddItem}
              >
                +
              </button>
            </div>
            <ul className='pb-5'>
              {tasks.map((task, index) => {
                return (
                  <ListItem
                    key={`item-${index}`}
                    text={task}
                    onDelete={() => onDelete(index)}
                  />
                );
              })}
            </ul>
            <button
              className='bg-indigo-500 px-28 py-2 rounded'
              onClick={() => setTasks([])} // * This can be declared function
            >
              🗑️ Delete Everything 🗑️
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
