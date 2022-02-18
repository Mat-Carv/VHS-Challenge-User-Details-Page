import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import UserUpdate from './pages/UserUpdate';

function App() {
  return (
    <Router>
      <div className="content">
        <Routes>
          <Route path="/" element={<UserUpdate />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
