import React, {useState} from 'react'
import data from './data'

const Index = () => {
    const [selected, setSelected] = useState(null)

    const handleSingleSelection = (getCurrentId) => {
      // setSelected(getCurrentId)
      setSelected(getCurrentId === selected ? null : getCurrentId)
    }

  return (
    <div>
      <div className="accordion">
        {data && data.length > 0 ? 
        data.map(dataItem => <div className='item'>
            <div onClick={() => handleSingleSelection(dataItem.id)} className="title">
                <h3>{dataItem.question}</h3>
                <span>+</span>
            </div>
            {
              selected === dataItem.id ? 
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