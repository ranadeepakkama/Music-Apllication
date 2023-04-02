import React from 'react'
import './structure.css'

const ItemStructure = ({item}) => {
  return (
    <div >
            <div className='cartItem' key={item.id}>
                <img src={item.image} alt={item.title} className= 'img' />
                <audio controls>
                    <source src={item.url} type='audio/mpeg'/>
                </audio>
                <div className='name'>
                    <p className='title'>{item.title}</p> 
                    <p className='artist'>/ {item.artist}</p>
                </div>
            </div>     
    </div>
  )
}

export default ItemStructure
