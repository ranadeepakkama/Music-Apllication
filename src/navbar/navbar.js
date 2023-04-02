import React from 'react'
import './navbar.css'
import {useState} from'react';
import Structure from '../musicPlayer/structure'

const Navbar = () => {
    const [search,setSearch] = useState('');

  const submitHandlar = (e) => {
    e.preventDefault();
    console.log(search);
    setSearch('');
  }
  
  return(
    <>
      <form onSubmit={submitHandlar}>
        <div className='navbar'>
          <h2 className='header'>Favourit Music</h2>
            <input type='text' 
                placeholder='Enter music name'
                className='input'
                value = {search}
                onChange={(e) =>setSearch(e.target.value)}
            />
        </div>
        <div> <Structure search = {search}/> </div>
      </form>
    </>
  )
}

export default Navbar
