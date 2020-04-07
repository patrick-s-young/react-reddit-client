import React from 'react';

const Comment = ({body, level}) => {
    const leftIndent = level * 40;
    const bgColor = 255 - level * 5;
    const rgb = [bgColor, bgColor, bgColor];
    const divStyle = {
      marginLeft: leftIndent,
      backgroundColor: `rgb(${rgb})`
    }
    return (
      <div className='comment'
            style={divStyle}>
        {body}
      </div>
    )
}

export default Comment;