import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Comment from './Comment.jsx';
import ParentArticle from './ParentArticle.jsx'

const Comments = () => {
  const { sub, parentId } = useParams();

  const [commentsObj, setCommentsObj] = useState(null);

  useEffect(() => {
    fetchListing(`https://www.reddit.com/r/${sub}/comments/${parentId.slice(3)}/best.json`); 
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
    const renderArr = [];
    let keyCount = 0;
    const bgColorsArr = ['chocolate', 'cornflowerblue', 'darkgoldenrod'];
    let bgColorCount = 0;
    render(commentsObj[1].data.children, 0, bgColorsArr[bgColorCount]);

    // helper function
    function render (children, levelCount, bgColor) {
      for (let idx = 0; idx < children.length; idx++) {
        const child = children[idx];
        bgColor = (levelCount === 0) ? bgColorsArr[bgColorCount++ % bgColorsArr.length] : bgColor;
        renderArr.push(<Comment body={child.data.body} 
                                level={levelCount} 
                                bgColor={bgColor}
                                key={keyCount++}/>);
        if (child.data.replies !== "") {
          render(child.data.replies.data.children, levelCount + 1, bgColor);
        }
      }
    }
    return renderArr;
  }

  return (
    <div id="flex-container">
      { commentsObj !== null && 
        <ParentArticle
          title={commentsObj[0].data.children[0].data.title}
          thumbnail={commentsObj[0].data.children[0].data.thumbnail}/>
      }

      { commentsObj !== null && 
        showComments()
      }
    </div>
  );
}

export default Comments;