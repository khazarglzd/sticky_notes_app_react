import React, { useEffect, useState, useRef } from 'react'
import "./App.css"
import LeaveCommentText from './components/LeaveCommentText'
import MainContext from './MainContext'
import Note from './components/Note'
import NoteBox from './components/NoteBox'

const App = () => {

  const screen = useRef(null)
  const [mode, setMode] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [notes, setNotes] = useState([{
    id: "1",
    note: "test note",
    number: 1,
    color: "red",
    position: {
      x: 350,
      y: 350
    }
  }])
  const [boxPosition, setBoxPosition] = useState({
    x: 0,
    y: 0,
  })
  const [boxVisible, setBoxVisible] = useState(false)

  useEffect(() => {
    screen.current.focus()
  }, [])

  const handleMouseMove = (e) => {
    setPosition({
      x: e.pageX,
      y: e.pageY
    }
    )

  }

  const handleKeyUp = (e) => {
    if (e.key === "c") {
      setMode(!mode)
      setBoxVisible(false)
    }
  }

  const handleClick = (e) => {
    if (mode) {
      setBoxPosition({
        x: position.x,
        y: position.y
      })
      setBoxVisible(true)
    }

  }

  const data = {
    position,
    boxPosition,
    setMode,
    notes,
    setNotes,
    setBoxVisible
  }


  return (
    <MainContext.Provider value={data}>
      <div ref={screen} onMouseMove={handleMouseMove} onClick={handleClick} className={`screen${mode ? ' editable' : ''}`} tabIndex={0} onKeyUp={handleKeyUp} >
        <img alt="img" src='https://img.freepik.com/free-vector/gradient-ui-ux-landing-page-template_23-2149051559.jpg?t=st=1712845870~exp=1712849470~hmac=4b4d4267e0355917fbff4009eccf2e3e545c5be9afc5e0d4567e2cf2cc1e5667&w=2000' />

        {mode && <LeaveCommentText />}

        {notes && notes.map(note => <Note {...note} />)}
        {boxVisible && <NoteBox />}

      </div>
    </MainContext.Provider>
  )
}

export default App