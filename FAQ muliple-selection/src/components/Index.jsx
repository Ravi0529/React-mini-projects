import React, { useState } from 'react'
import data from './data'

const Index = () => {
  const [multiple, setMultiple] = useState([])

  const handleMultipleSelection = (getCurrentId) => {
    let copy = [...multiple]
    const findIndex = copy.indexOf(getCurrentId)

    if (findIndex === -1) copy.push(getCurrentId)
    else copy.splice(findIndex, 1)

    setMultiple(copy)
    console.log(multiple)
  }

  return (
    <div className="max-w-2xl mx-auto p-4 bg-gray-900 text-white min-h-screen">
      <div className="accordion space-y-4">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div
              key={dataItem.id}
              className="item border border-gray-700 rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out"
            >
              <div
                onClick={() => handleMultipleSelection(dataItem.id)}
                className="title bg-gray-800 p-4 flex justify-between items-center cursor-pointer hover:bg-gray-700 transition duration-300 ease-in-out"
              >
                <h3 className="text-lg font-medium">{dataItem.question}</h3>
                <span className="transform transition-transform duration-300 ease-in-out">
                  {multiple.indexOf(dataItem.id) !== -1 ? '-' : '+'}
                </span>
              </div>
              {multiple.indexOf(dataItem.id) !== -1 ? (
                <div className="content bg-gray-800 p-4 border-t border-gray-700 animate-fade-in">
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
