import React, { useState, useEffect } from 'react';

const Header = ({searchDefault, update, searchError}) => {


  const [search, setSearch] = useState(searchDefault);

  useEffect(() => {
    console.log('useEffect: search is updated');
  }, [search]);

  function handleChange(event) {    
    setSearch(event.target.value); 
    console.log(`search is ${event.target.value}`);
  }

  function handleSubmit(event) {
    console.log(`submit search for: ${event.target.value}`)
    event.preventDefault();
    update(search);
  }


    return (
      <div className='header-wrapper'>
        <div className='search'>
          <form onSubmit={handleSubmit}>
            r/<input  type='text' 
                      value={search} 
                      onChange={handleChange} 
                      onFocus={() => setSearch('')}/>
          </form>
          <span className='search-error'>{searchError}</span>
        </div>
      </div>
    )
}

export default Header;