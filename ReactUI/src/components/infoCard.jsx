import React from 'react';
import { deleteUser } from '../api/api.js'
import './info.css'
const InfoCard = (props) => {
  const { name, id, assignee, project, startTime, jiettheshBalajiProperty } = props.details

  const handleDelete = () => {
    deleteUser(props.details, props.setUserData)
  }
  return (
    <div className="card">
      <div className="details">
        <p><strong>Name:</strong> {name}</p>
        <p><strong>ID:</strong> {id}</p>
        <p><strong>Assignee:</strong> {assignee}</p>
        <p><strong>Project:</strong> {project}</p>
        <p><strong>Start Time:</strong> {startTime}</p>
        <p><strong>jiettheshBalajiProperty:</strong>{jiettheshBalajiProperty}</p>
      </div>
      <div className="button">
        <button onClick={handleDelete}>delete</button>
      </div>
    </div>
  );
};

export default InfoCard;