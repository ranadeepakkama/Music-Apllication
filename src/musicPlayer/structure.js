import React from 'react'
import { MUSICDATA } from './musicList'
import { useState,useEffect} from'react'
import ItemStructure from './itemDesign';



const Structure = ({search}) => {
    const [data,setData] = useState([]);
    useEffect(() => {
    setData(MUSICDATA.filter(item => item.title.toLowerCase().includes(search))); 
    }, [search]);

    const musicData = data.map((item) => {
          return (
          <div key = {item.id}> <ItemStructure item = {item}/> </div>)
      })



   return (
    musicData.length !== 0 ? (<div className='container'>{musicData}</div>) : <img src='https://cdn2.wpbeginner.com/wp-content/uploads/2013/04/wp404error.jpg' alt='notFound' className='image'/>
    )
    
  
}

export default Structure
