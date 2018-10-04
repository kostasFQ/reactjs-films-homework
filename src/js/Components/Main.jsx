import React from 'react'

const arr = [1,2,3,4,5];
const Main = () => {
  return (
    <div className="content">
      <h1>KST</h1>
      {arr.map( (item)=> {
        return <div key={item}>{item}</div>
      } )}
    </div>
  )
}

export default Main