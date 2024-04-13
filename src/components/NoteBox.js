import React from 'react'
import { useContext, useState } from 'react'
import MainContext from '../MainContext'

const NoteBox = () => {



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
    const { boxPosition, setMode, notes } = useContext(MainContext)

    const [color, setColor] = useState(types[0].color)
    const [note, setNote] = useState('')

    const changeColor = (e) => {
        setColor(e.target.value)
    }
    return (
        <div className="note-box" onMouseEnter={() => setMode(false)} onMouseLeave={() => setMode(true)} style={{
            '--color': color,
            position: "absolute",
            top: boxPosition.y, left: boxPosition.x
        }}>
            <span className="note-box-number">{notes.length + 1}</span>
            <select onChange={changeColor}>
                {types.map(type => (
                    <option value={type.color}>{type.text}</option>
                ))}
            </select>
            <textarea onChange={(e) => setNote(e.target.value)} cols="30" rows="5" />
            <button disabled={!note}>Ekle</button>
        </div>
    )
}

export default NoteBox