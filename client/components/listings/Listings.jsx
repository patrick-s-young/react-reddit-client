import React, { useState, useEffect } from 'react';
import Header from '../header/Header.jsx';
import SortButton from './SortButton.jsx';
import Article from './Article.jsx';

const Listings = () => {
  
  const sortDefault = 'hot';
  const subDefault = 'All';
  const sortOptions = ['Hot', 'New', 'Top', 'Rising'];

  const [reddit, setReddit] = useState({ sub: subDefault, sort: sortDefault });
  const [dataObj, setDataObj] = useState(null);

  useEffect(() => {
    fetchListing(`${global.BASE_URL}/${reddit.sub}/${reddit.sort}.json?limit=${global.DEFAULT_LIMIT}`); 
  }, [reddit]);

  function fetchListing (url) {
    fetch(url)
      .then(response => response.json())
      .then(data => setDataObj(data))
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  function showSortButtons () {
    return sortOptions.map((option, idx) => (
        <SortButton 
          label={option}
          keyName='sort'
          keyValue={option.toLowerCase()}
          setState={setReddit}
          selected={reddit.sort === option.toLowerCase()}
          key={idx}/>));
  }

  function showListing () {
    return dataObj.data.children.map((child, idx) => ( 
      <Article 
        thumbnail={child.data.thumbnail}
        title={child.data.title} 
        sub={child.data.subreddit}
        t3Id={child.data.name}
        numComments={child.data.num_comments}
        key={idx}/>));
  }

  function showPrevNext () {
    return (
      <div className='prevNext'>
      <button
        className='navButton'
        onClick={() => showPage('prev')}>
        {'<< Prev'}
      </button>
      <button
        className='navButton'
        onClick={() => showPage('next')}>
        {'Next >>'}
      </button>
      </div>
    )
  }

  function showPage (direction) {
    window.scrollTo(0, 0);
    if (direction === 'next') {
      fetchListing(`${global.BASE_URL}/${reddit.sub}/${reddit.sort}.json?limit=${global.DEFAULT_LIMIT}&after=${dataObj.data.after}&count=${global.DEFAULT_LIMIT}`);
    } else {
      fetchListing(`${global.BASE_URL}/${reddit.sub}/${reddit.sort}.json?limit=${global.DEFAULT_LIMIT}&before=${global.DEFAULT_LIMIT}`);
    }
  }

  return (
    <div>
      { dataObj !== null && 
        <>
        <Header searchDefault={reddit.sub} update={(newSub) => setReddit(prev => ({...prev, sub: newSub}))}/> 
        <div id='navBar'>{showSortButtons()}{showPrevNext()}</div>  
        {showListing()}
        <div className='prevNext'>{showPrevNext()}</div>
        </>  
      }
    </div>
  );
}

export default Listings;
