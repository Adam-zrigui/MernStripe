import React from 'react'

export default function Success() {
const url = window.location.href;
const sessionId = new URL(url).searchParams.get('session_id');
    return (
    <h2>Success {sessionId}</h2>
  )
}
