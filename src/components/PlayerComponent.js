import React, { useState } from 'react';

const PlayerComponent = ({ onJoin }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onJoin(name);
  };

  return (
    <div>
      <h2>Enter Your Name</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type="submit">Join Game</button>
      </form>
    </div>
  );
};

export default PlayerComponent;
