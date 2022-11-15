import { toBeDisabled } from '@testing-library/jest-dom/dist/matchers'
import React, { useEffect, useState } from 'react'

const apiCall = {
    event: "bts:subscribe",
    data: {
        channel: "order_book_btcusd"
    }
}

const WebSocketClient = () => {
    const [bids, setBids] = useState([0])

    useEffect(() => {
        const websocket = new WebSocket("wss://ws.bitstamp.net")

        websocket.onopen = (event) => {
            websocket.send(JSON.stringify(apiCall))
        }

        websocket.onmessage = (event) => {
            const data = JSON.parse(event.data)
            try {
                if (data.event === "data") {
                    setBids(data.data.bids.slice(0, 5))
                }
            } catch (err) {
                console.log(err)
            }
        }
    }, [])

    return <div>{bids.map(b => <h1>{b}</h1>)}</div>
}

export default WebSocketClient