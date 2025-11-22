import React from 'react'
import './Home.css'
import Controls from '../../components/Controls/Controls.jsx'

function Home() {
  
  return (
    <div className='main-container'>
      <div className="container">
        <h1 className="Heading">Emoji Editor</h1>
        <p className='sub-title'>Edit and customize your favorite emojis!</p>
        <div className="emoji-grid">
          <h2 className='emoji'>🚗</h2>
        </div>
      </div>
      <div className="controls-container">
        <div className='left-controls'>
          <Controls operation={"Font Size:"} />
          <Controls operation={"Rotation:"} />
          <Controls operation={"Blur:"} />
          <Controls operation={"Brightness:"} />
        </div>
        <div className='right-controls'>
          <Controls operation={"Opacity:"} />
          <Controls operation={"Contrast:"} />
          <Controls operation={"Brightness:"} />
          <Controls operation={"Color:"} />
        </div>

      </div>
    </div>
  )
}

export default Home
