import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
function Another() {
    const state  = useSelector((e)=>e);
  return (
    <div>{state}</div>
  )
}

export default Another;