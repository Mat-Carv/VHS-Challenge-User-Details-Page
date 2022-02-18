import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import UserUpdate from './pages/UserUpdate';
import styled from '@emotion/styled'



function App() {
  const PageDiv = styled.div`
  background: #22262D;
  width: 100%;
  height: 100%;
  `

  return (
    <Router>
      <PageDiv className="content">
        <Routes>
          <Route path="/" element={<UserUpdate />} />
        </Routes>
      </PageDiv>
    </Router>
  );
}

export default App;
