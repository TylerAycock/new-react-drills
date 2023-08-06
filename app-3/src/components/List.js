import { useState } from 'react'
import './List.css'

const List = () => {
  const [list, setList] = useState(['pasta', 'ice cream', 'pizza', 'meat loaf'])
  const [filter, setFilter] = useState('')

  let filterItems = list.filter(food => {
    return (
        food.includes(filter)
    )
  })

  const display = filterItems.map(food => {
    return (
      <h2>{food}</h2>
    )
  })



  return (
    <div className='display'>
      <input type="text" onChange={e => { setFilter(e.target.value) }} />
      <div className='list'>
        {display}
      </div>
    </div>
  )


}

export default List