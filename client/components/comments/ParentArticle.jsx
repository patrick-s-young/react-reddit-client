import React from 'react';

const ParentArticle = ({title, thumbnail}) => {

    return (
      <div className='parent-article'>
        {title}
        <img src={thumbnail} />
      </div>
    )
}

export default ParentArticle;