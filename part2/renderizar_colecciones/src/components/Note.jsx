import React from 'react'

export default function Note(props) {
    const { note } = props;
  
  return (<li>{note.content}</li>    
  )
}
