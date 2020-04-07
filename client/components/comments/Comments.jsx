import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Comment from './Comment.jsx';
import ParentArticle from './ParentArticle.jsx'

let keyCount = 100;

const Comments = () => {
  const { sub, parentId } = useParams();
  const [commentsObj, setCommentsObj] = useState(null);
  const limit = 25;
  let renderedComments = [];

  useEffect(() => {
    fetchListing(`https://www.reddit.com/r/${sub}/comments/${parentId.slice(3)}/best.json?limit=${limit}`); 
  }, []);

  function fetchListing (url) {
    fetch(url)
      .then(response => response.json())
      .then(data => setCommentsObj(data))
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  

  const renderArr = [];

  function showComments () {
    render(commentsObj[1].data.children, 0);

    function render (children, levelCount) {
      for (let idx = 0; idx < children.length; idx++) {
        const child = children[idx];
        if (child.kind !== "t1") continue;
        renderArr.push(<Comment body={child.data.body} 
                                level={levelCount} 
                                key={keyCount++}/>);
        if (child.data.replies !== "") {
          render(child.data.replies.data.children, levelCount + 1);
        } 
      }
    }
    return renderArr;
  }
 
  

  return (
    <div>
      { commentsObj !== null && 
        <>
        <ParentArticle
          thumbnail={commentsObj[0].data.children[0].data.thumbnail}
          title={commentsObj[0].data.children[0].data.title}/>
          {showComments()}
        </>
      }
    </div>
  );
}

export default Comments;

