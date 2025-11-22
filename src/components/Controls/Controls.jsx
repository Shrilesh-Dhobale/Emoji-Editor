import React from 'react'
import './Controls.css'
function Controls({operation, setOperation}) {
  const [value, setValue] = React.useState(50);
  return (
    <div>
        <div className="font-size">
            <h2 className='control-heading'>{operation}</h2>
            <input type="range" min="10" max="100"  />
        </div>
    </div>
  )
}

export default Controls
