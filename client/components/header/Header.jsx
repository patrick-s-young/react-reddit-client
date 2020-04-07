import React, { useState, useEffect } from 'react';

const Header = ({searchDefault}) => {


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
        </div>
      </div>
    )
}

export default Header;