import React, {useState} from 'react'

export const RandomColor = () => {
    const [bgColor, setBgColor] = useState('#ffffff');
     
    const generateRandoColor = () => {
        const randonColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        setBgColor(randonColor);
    };


  return (
      <div className='container-page' style={{ backgroundColor: bgColor }}>
          <h2 className='title-page'>Random Color</h2>
          <button onClick={generateRandoColor} className='bg-blue-500 text-white px-4 py-2'>Generate Color</button>

      </div>
  )
}
