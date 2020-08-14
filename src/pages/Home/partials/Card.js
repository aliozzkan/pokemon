import React from 'react';
import { Link } from 'react-router-dom';
import { GIF_URL } from '@/helpers/server-url';

function Card(props) {
  return (
    <Link to={`/${props.name}`} className="unset-link">
      <div className="card">
        <img src={GIF_URL(props.name)} alt={props.name} width="50" />
        <p>{props.name}</p>
      </div>
    </Link>
  );
}

export default Card;
