import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

const Article = ({thumbnail, title, sub, t3Id}) => {
  
    return (
      <div
        className='post'>
        <img 
          src={thumbnail} 
          width='80'/>
        {title}
        <Link to={`/comments/${sub}/${t3Id}`} >Comments</Link>
      </div>
    )
}

export default Article;

