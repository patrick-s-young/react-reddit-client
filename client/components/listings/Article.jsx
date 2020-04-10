import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

const Article = ({thumbnail, title, sub, t3Id, numComments}) => {

  thumbnail = (thumbnail === 'default' || thumbnail === 'self') ? '../../assets/images/no-image.png': thumbnail;

    return (
      <Link to={`/comments/${sub}/${t3Id}`} >
      <div className='article-wrapper'>
        <div className='image'>
          <img src={thumbnail}/>
        </div>
        <div className='title'>
          {title}
        </div>
        <div className='num-comments'>
          {numComments} comments
        </div>
      </div>
      </Link>
    )
}

export default Article;
