import React, { useState, useEffect } from 'react';

const Header = ({searchDefault, update, searchError}) => {

  const [search, setSearch] = useState(searchDefault);

  function handleChange(event) {    
    setSearch(event.target.value); 
  }

  function handleSubmit(event) {
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