import React from 'react'
import { useContext } from 'react'
import MainContext from '../MainContext'

const NoteBox = () => {

    const { boxPosition } = useContext(MainContext)

    const types = [
        {
            name: 'comment',
            color: 'red',
            text: 'Comment',
        },
        {
            name: 'private-comment',
            color: '#999',
            text: 'Private Comment',
        },
        {
            name: 'note',
            color: 'orange',
            text: 'Note',
        },
    ]
    return (
        <div style={{
            position: "absolute",
            top: boxPosition.y, left: boxPosition.x
        }}>
            <select>
                {types.map(type => (
                    <option value={type.color}>{type.text}</option>
                ))}
            </select>
        </div>
    )
}

export default NoteBox