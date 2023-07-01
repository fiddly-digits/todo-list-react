import { useState } from 'react';

import ListItem from './components/ListItem';

function App() {
  const [visible, setVisible] = useState(true);
  const [items, setItems] = useState([]);

  return (
    <>
      <div className='min-h-screen font-sans bg-neutral-900 text-white'>
        <div className='flex flex-wrap justify-center'>
          <div>
            <h1 className='text-center py-5'>To-do list</h1>
            <div className='flex justify-between gap-5 py-5'>
              <input
                type='text'
                placeholder='Add Activities'
                className='border border-slate-800 grow rounded'
              />
              <button className='bg-slate-200 w-8 h-8 text-black rounded'>
                +
              </button>
            </div>
            <ul className='py-5'>
              <ListItem
                text='Test'
                onDelete={() => {
                  console.log('Test');
                }}
              ></ListItem>
            </ul>
            <button className='bg-indigo-500 px-28 py-3 rounded'>
              🗑️ Delete Everything 🗑️
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
