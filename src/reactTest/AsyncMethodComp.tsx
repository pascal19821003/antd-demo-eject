import React, { useEffect, useState } from 'react'

export default function AsyncMethodComp() {
  const [times, setTimes] = useState(0);
  const [showUser, setShowUser] = useState(false)

  useEffect(()=>{
    setTimeout(()=>{
      setShowUser(true)
    },500)
  },[]);

  const handleClick = () => {
    setTimes(times + 1)
  }

  return (
    <div>
      <div role={"timesDiv"}>{times}times</div>
      <div>
        <button role={"addBtn"} onClick={handleClick}>add</button>
      </div>

      {showUser && (
        <div role="user">I am pascal</div>
      )}
    </div>
  )
}
