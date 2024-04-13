import { useContext, useState } from 'react'
import MainContext from '../MainContext';


const Note = (note) => {

    const [visible, setVisible] = useState(false)
    const { setMode } = useContext(MainContext)


    const showNote = () => {
        setVisible(!visible)
    }

    return (
        <div className="note-container"
            style={{ '--color': note.color, position: 'absolute', top: note.position.y, left: note.position.x }}>
            <span onClick={showNote} className="note-box-number">{note.number}</span>
            <div className="note" style={{ display: visible ? 'flex' : 'none' }}>
                {note.note}
            </div>
        </div>
    )
}

export default Note