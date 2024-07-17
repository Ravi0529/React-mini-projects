import React, { useState, useEffect } from 'react'

const Index = () => {
  const [typeOfColor, setTypeOfColor] = useState('hex')
  const [color, setColor] = useState('#000000')

  const handleCreateRandomHexColor = () => {
    let hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
    let hexColor = '#'

    for (let i = 0; i < 6; i++) {
      hexColor += hex[Math.floor(Math.random() * hex.length)]
    }
    // console.log(hexColor)
    setColor(hexColor)
  }

  const handleCreateRandomRgbColor = () => {
    let r = Math.floor(Math.random() * 256) // random = [0, 1)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)

    setColor(`rgb(${r},${g},${b})`)
  }

  useEffect(() => {
    if (typeOfColor === 'rgb') handleCreateRandomRgbColor();
    else handleCreateRandomHexColor();
  }, [typeOfColor])
  

  return (
    <section style={{ width: "100vw", height: "100vh", background: color }}>
      <div className="container">
        <button onClick={() => setTypeOfColor('hex')} className='border-2 border-red-400 bg-slate-400'>Create HEX Color</button>
        <button onClick={() => setTypeOfColor('rgb')} className='border-2 border-red-400 bg-slate-400'>Create RGB Color</button>
        <button onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor} className='border-2 border-red-400 bg-slate-400'>Generate Random Color</button>

        <div className='flex justify-center items-center text-white text-[45px] mt-10 flex-wrap'>
          <h3>{typeOfColor === 'rgb' ? 'RGB Color' : 'HEX Color'}</h3>
          <h1>{color}</h1>
        </div>

      </div>
    </section>
  )
}

export default Index
