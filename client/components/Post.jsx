import React from 'react';

const Post = ({thumbnail, title}) => {
  
    return (
      <div
        className='post'>
        <img 
          src={thumbnail} 
          width='80'/>
        {title}
      </div>
    )
}

export default Post;

