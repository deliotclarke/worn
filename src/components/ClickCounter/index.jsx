import React, { useState } from 'react';

const ClickCounter = () => {
  const [count, setCount] = useState(0);
  const [userWord, setWord] = useState('');
  const [fetchResponse, setResponse] = useState({});
  const handleAdd = () => {
    setCount(count + 1);
  };
  const handleSubtract = () => {
    setCount(count - 1);
  };
  const captureWord = (string) => {
    setWord(string);
  };
  const handleClick = () => {
    setWord(userWord.toUpperCase());
  };
  const handleFetch = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/4')
      .then((res) => res.json())
      .then((json) => setResponse(json));
  };
  console.log(fetchResponse);

  return (
    <div>
      <p style={{ fontSize: '1em' }}>Current Count: {count}</p>
      <p>Your Word: {userWord}</p>
      <input type='button' value='add one' onClick={() => handleAdd()} />
      <input
        type='button'
        value='subtract one'
        onClick={() => handleSubtract()}
      />
      <div>
        <input
          type='text'
          placeholder='enter words and stuff'
          onChange={(e) => captureWord(e.target.value)}
        />
        <input type='button' value='RECORD' onClick={() => handleClick()} />
      </div>
      <input type='button' value="fetch 'em" onClick={() => handleFetch()} />
      <div>
        {Object.entries(fetchResponse).map(([key, value], i) => (
          <h6 key={i}>
            {key}: {value.toString()}
          </h6>
        ))}
      </div>
    </div>
  );
};

export default ClickCounter;
