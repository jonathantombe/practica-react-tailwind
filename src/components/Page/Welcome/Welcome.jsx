import React, { useState } from 'react'

export const Welcome = () => {
    const [name, setName] = useState('');
  return (
      <div className='container-page'>
          <h2 className='title-page'>WELCOME</h2>
          <input
              type="text"
              placeholder="Nombre completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border p-2"
          />
          <p className="mt-4">Bienvenido {name}</p>
    </div>
  )
}
