import React, { useState } from 'react';
import { echo } from '../services/api';

const Echo: React.FC = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const echoResponse = await echo(message);
    setResponse(echoResponse);
  };

  // Vulnerable: Potential XSS
  return (
    <div>
      <h2>Echo</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter a message"
        />
        <button type="submit">Echo</button>
      </form>
      {response && <div dangerouslySetInnerHTML={{ __html: response }} />}
    </div>
  );
};

export default Echo;