import { useSocket } from "../context/socket"
import { useLocation } from "react-router-dom";


const { useState, useEffect, useRef } = require("react")

const usePeer = () => {
    const socket = useSocket()
    const location = useLocation()
    const roomId = location.hash.split("/")[2]
    const [peer, setPeer] = useState(null)
    const [myId, setMyId] = useState('')
    const isPeerSet = useRef(false)

    useEffect(() => {
        if (isPeerSet.current || !roomId || !socket) return;
        isPeerSet.current = true;
        let myPeer;
        (async function initPeer() {
            myPeer = new (await import('peerjs')).default()
            setPeer(myPeer)

            myPeer.on('open', (id) => {
                console.log(`your peer id is ${id}`)
                setMyId(id)
                socket?.emit('join-room', roomId, id)
            })
        })()
    }, [roomId, socket])

    return {
        peer,
        myId
    }
}

export default usePeer;