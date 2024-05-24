"use client";
import React, { useState } from 'react'

const UpVoteBtn = () => {
    const [upvoteCount, setupvoteCount] = useState(0)
    return (
        <main>
            <button onClick={() => {
                setupvoteCount(upvoteCount + 1)
            }} className='bg-black p-2 rounded-lg mt-11 text-white'>Upvote : {upvoteCount}</button>
        </main>
    )
}

export default UpVoteBtn