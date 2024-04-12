import React from 'react'
import { useContext } from 'react'
import MainContext from '../MainContext'

const LeaveCommentText = () => {
    const { position } = useContext(MainContext)
    return (
        <div className='leave-comment-text' style={{ position: "fixed", top: position.y, left: position.x + 10 }}>Click here to comment</div>
    )
}

export default LeaveCommentText