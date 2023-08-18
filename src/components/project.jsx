import React from 'react';

const Project = ({ name,url, description, languages }) => (
  <div className="project">
    <h3>{name}</h3>
    {url && <a href={url}>GitHub Repo</a>}
    <p>{description}</p>
    <p>Languages: {languages.join(', ')}</p>
  </div>
);

export default Project;
