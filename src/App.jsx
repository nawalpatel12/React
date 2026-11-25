import React, { useState } from 'react';

function App() {
  const [message, setMessage] = useState("Hello World!");

  return (
    <div className='flex-row text-center'>
      <h1 className='text-4xl text-red-500 p-6 m-4 '>{message}</h1>
      <button className='text-lg text-pink-500 p-6 border ' onClick={() => setMessage("Welcome to React!")}>
        Click Me!
      </button>
    </div>
  );
}

export default App;