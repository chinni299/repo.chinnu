import React from 'react'

const page = ({params}) => {
    console.log("this is log" , params)
  return (
    <div>
      <h1>this is params {params.username}</h1>
    </div>
  )
}

export default page
