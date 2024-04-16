import { useContext, useState } from 'react'
import MainContext from '../MainContext';
import Draggable from 'react-draggable';


const Note = (note) => {

    const [visible, setVisible] = useState(false)
    const { setMode } = useContext(MainContext)


    const showNote = () => {
        setVisible(!visible)
    }

    return (
        <Draggable defaultPosition={{ x: note.position.x, y: note.position.y }} >
            <div className="note-container" onMouseEnter={() => setMode(false)} onMouseLeave={() => setMode(true)}
                style={{ '--color': note.color, position: 'absolute', top: 0, left: 0 }}>
                <span onClick={showNote} className="note-box-number">{note.number}</span>
                <div className="note" style={{ display: visible ? 'flex' : 'none' }}>
                    {note.note}
                </div>
            </div>
        </Draggable>
    )
}

export default Note