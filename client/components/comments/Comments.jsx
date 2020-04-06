import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Comment from './Comment.jsx';

const Comments = () => {
  const { sub, parentId } = useParams();

  const [commentsObj, setCommentsObj] = useState(null);

  useEffect(() => {
    fetchListing(`https://www.reddit.com/r/${sub}/comments/${parentId.slice(3)}/best.json?limit=10`); 
  }, []);

  function fetchListing (url) {
    fetch(url)
      .then(response => response.json())
      .then(data => setCommentsObj(data))
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  
  function showComments () {
    //return commentsObj[1].data.children.map((child, idx) => (<div key={idx}>{ child.data.body }</div>));
    return commentsObj[1].data.children.map((child, idx) => ( 
      <Comment 
        body={child.data.body}
        key={idx}/>));

  }

  return (
    <div>
      { commentsObj !== null && 
        showComments()
      }
    </div>
  );
}

export default Comments;