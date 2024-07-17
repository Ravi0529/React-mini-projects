import React, {useState} from 'react'
import data from './data'

const Index = () => {
    // const [selected, setSelected] = useState(null)
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
    <div>
      <div className="accordion">
        {data && data.length > 0 ? 
        data.map(dataItem => <div className='item'>
            <div onClick={() => handleMultipleSelection(dataItem.id)} className="title">
                <h3>{dataItem.question}</h3>
                <span>+</span>
            </div>
            {
              multiple.indexOf(dataItem.id) !== -1 ? 
              <div className='content'>
                {dataItem.answer}
              </div>
              : null
            }
        </div>) : <div>No Data Found!</div>}
      </div>
    </div>
  )
}

export default Index