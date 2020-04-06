import React from 'react';

const Comment = ({body, level, bgColor}) => {
    const leftIndent = level * 40;
    const opacity = (100 - leftIndent/2) * 0.01 
    const divStyle = {
      marginLeft: leftIndent,
      opacity: opacity,
      backgroundColor: bgColor
    }
    return (
      <div className='comment'
            style={divStyle}>
        {body}
      </div>
    )
}

export default Comment;