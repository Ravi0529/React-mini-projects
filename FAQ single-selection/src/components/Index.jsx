import React, { useState } from 'react'
import data from './data'

const Index = () => {
  const [selected, setSelected] = useState(null)

  const handleSingleSelection = (getCurrentId) => {
    setSelected(getCurrentId === selected ? null : getCurrentId)
  }

  return (
    <div className="max-w-2xl mx-auto p-4 bg-[#1a1a1a] text-white min-h-screen">
      <div className="accordion space-y-4">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div
              key={dataItem.id}
              className="item border border-[#333] rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out"
            >
              <div
                onClick={() => handleSingleSelection(dataItem.id)}
                className="title bg-[#2c2c2c] p-4 flex justify-between items-center cursor-pointer hover:bg-[#3d3d3d] transition duration-300 ease-in-out"
              >
                <h3 className="text-lg font-medium">{dataItem.question}</h3>
                <span className="transform transition-transform duration-300 ease-in-out">
                  {selected === dataItem.id ? '-' : '+'}
                </span>
              </div>
              {selected === dataItem.id ? (
                <div className="content bg-[#2c2c2c] p-4 border-t border-[#333] animate-fade-in">
                  {dataItem.answer}
                </div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No Data Found!</div>
        )}
      </div>
    </div>
  )
}

export default Index
