
import { v4 as uuidv4 } from 'uuid';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Video() {
  const [roomId, setRoomId] = useState('')
  const navigate = useNavigate()

  const createAndJoin = () => {
    const roomId = uuidv4()
    // router.push(`/${roomId}`)
    navigate(`/video/${roomId}`)
  }

  const joinRoom = () => {
    if (roomId) navigate(`/video/${roomId}`)
    else {
      alert("Please provide a valid room id")
    }
  }
  return (
    <div className="w-4/12 mx-auto p-2 border border-white rounded mt-8 text-white flex flex-col items-center">
        <h1 className='text-xl text-center'>Google Meet Clone</h1>
        <div className="bg-buttonPrimary py-2 px-4 rounded">
          <input className='text-black text-lg p-1 rounded w-9/12 mb-3' placeholder='Enter Room ID' value={roomId} onChange={(e) => setRoomId(e?.target?.value)}/>
          <button className='flex flex-col items-center mt-3 w-full' onClick={joinRoom}>Join Room</button>
        </div>
        <span  className="my-3 text-xl" >--------------- OR ---------------</span>
        <button onClick={createAndJoin}>Create a new room</button>
    </div>
  )
}
