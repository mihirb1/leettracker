import './Login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting:', name);
    navigate(`/progress/${name.trim()}`);
  };

  return (
    <div className="log">
      <div className="log-title">Enter your Leetcode username to start!</div>
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          placeholder="Enter here"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit" style={{ marginTop: '1rem' }}>Submit</button>
      </form>
    </div>
  );
};

export default Login;
