import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Comments from '../components/comments/Comments.jsx';
import Listings from '../components/listings/Listings.jsx';


const MainContainer = () => {

  return (
    <Router>
    <div>
         <div className='app-top'>
         <Link to='/' ><img src='../assets/images/no-image.png' /><span>redditto</span></Link>
         </div>
         <Switch>
           <Route exact path="/" component={Listings} />
           <Route exact path="/comments/:sub/:parentId" component={Comments} />
         </Switch>
       <div className='app-bottom'></div>
    </div>
    </Router>
  );
}

export default MainContainer;
