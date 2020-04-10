import React from 'react';

const ParentArticle = ({thumbnail, title}) => {

  thumbnail = (thumbnail === '' || thumbnail === 'self') ? '../../assets/images/no-image.png': thumbnail;

    return (
      <div className='parent-article-wrapper'>
        <div className='image'>
          <img src={thumbnail} />
        </div>
        <div className='title'>
          {title}
        </div>
      </div>
    )
}

export default ParentArticle;





