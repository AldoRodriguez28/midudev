import React from 'react'

export default function content({parte}) {
    console.log(parte)
  return (
    <>
        <p>{parte[0].name +" "+ parte[0].exercises}</p>
        <p>{parte[1].name +" "+ parte[1].exercises}</p>
        <p>{parte[2].name +" "+ parte[2].exercises}</p>
    </>
  )
}
