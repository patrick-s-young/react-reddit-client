import React, { useState, useEffect } from 'react';
import SortButton from './SortButton.jsx';
import Article from './Article.jsx';

const Listings = () => {
  
  const baseURL = 'https://www.reddit.com/r';
  const limit = 5;
  const sortDefault = 'hot';
  const subDefault = 'onOff';

  const [reddit, setReddit] = useState({ sub: subDefault, sort: sortDefault });
  const [dataObj, setDataObj] = useState(null);
  const sortOptions = ['Hot', 'New', 'Top', 'Rising'];

  useEffect(() => {
    fetchListing(`${baseURL}/${reddit.sub}/${reddit.sort}.json?limit=${limit}`); 
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
        key={idx}/>));
  }



  function showPrevNext () {
    return (
      <div>
      <button
        onClick={() => showPage('prev')}>
        PREV
      </button>
      <button
        onClick={() => showPage('next')}>
        NEXT
      </button>
      </div>
    )
  }

  function showPage (direction) {
    if (direction === 'next') {
      fetchListing(`${baseURL}/${reddit.sub}/${reddit.sort}.json?limit=${limit}&after=${dataObj.data.after}&count=${limit}`);
    } else {
      fetchListing(`${baseURL}/${reddit.sub}/${reddit.sort}.json?limit=${limit}&before=${dataObj.data.before}`);
    }
  }


  return (
    <div>
      { dataObj !== null && 
        showSortButtons()
      }

      { dataObj !== null && 
        showPrevNext()
      }
      
      { dataObj !== null && 
        showListing()
      }

    </div>
  );
}

export default Listings;
