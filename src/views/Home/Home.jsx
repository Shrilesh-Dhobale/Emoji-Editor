import React from 'react'
import './Home.css'

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
          <div className="font-size">
            <h2 className='control-heading'>Font Size:</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
