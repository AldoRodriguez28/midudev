import React from 'react'

export default function Total({total}) {
  return (
    <p>Number of exercises {total[0].exercises + total[1].exercises + total[2].exercises}</p>
    )
}
