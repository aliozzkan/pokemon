import React from 'react';
import { Container } from './partials';

function Home() {
  return (
    <div>
      <Container>
        <div className="logo">Logo</div>
        <div className="grid-card-container">
          <div className="card">Card A</div>
          <div className="card">Card A</div>
          <div className="card">Card A</div>
          <div className="card">Card A</div>
          <div className="card">Card A</div>
          <div className="card">Card A</div>
        </div>
      </Container>
    </div>
  );
}

export default Home;
