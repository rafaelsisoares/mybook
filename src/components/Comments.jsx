import React from 'react'

export default function Comments({ comments }) {
  return comments.map(({user, comment}, i) => (
      <div key={i}>
        <strong>{user}</strong>
        <p>{comment}</p>
      </div>
    ));
};
