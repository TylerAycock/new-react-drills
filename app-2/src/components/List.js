import {useState} from 'react'
import './List.css'

const List = ()=> {

  const [list, setList] = useState(['pasta', 'pasta', 'ice cream', 'meat loaf'])

  const items = list.map(food=> {
    return(
      <h2>{food}</h2>
    )
  })
  return(
    <div className='list'>
      {items}
    </div>
  )


}

export default List 