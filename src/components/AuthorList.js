import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AuthorList = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/authors')
      .then(response => {
        setAuthors(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the authors!', error);
      });
  }, []);

  return (
    <div>
      <h1>List of Authors</h1>
      <ul>
        {authors.map((author) => (
          <li key={author._id}>{author.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default AuthorList;
