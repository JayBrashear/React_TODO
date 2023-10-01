import React from 'react';

export default function List_Item(props) {
  return (
    <div className = "jsx-list-item">
        <p>List Item: {props.task}</p>
    </div>
  )
}
