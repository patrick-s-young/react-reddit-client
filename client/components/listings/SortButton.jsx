import React from 'react';

const SortButton = ({label, keyName, keyValue, setState, selected}) => {

    return (
      <button 
        className= {selected ? 'navButtonSelected' : 'navButton'}
        onClick=  { () => { 
                      setState(prevState => { 
                        return { ...prevState, [keyName]: keyValue} })}}>
        {label}
      </button>
    )

}

export default SortButton;



