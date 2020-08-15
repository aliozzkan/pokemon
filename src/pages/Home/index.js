import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      Hi,
      <br />
      Welcome technical test.
      <br />
      <br />
      <Link to="/pokemon">Go To Pokemon List</Link>
    </div>
  );
}
