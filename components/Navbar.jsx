import React from 'react'

const Navbar = ({menu, setmenu}) => {
  const update_=(e)=>{
    setmenu(e);
  }
  return (
    <nav className="absolute">
        <ul className="flex justify-evenly pt-3">
            <li className={(menu==0)?"active rounded-xl px-3 py-3":"px-3 py-3"}><a href="#home" onClick={()=>{update_(0)}}>Home</a></li>
            <li className={(menu==1)?"active rounded-xl px-3 py-3":"px-3 py-3"}><a href="#project" onClick={()=>{update_(1)}}>Project</a></li>
            <li className={(menu==2)?"active rounded-xl px-3 py-3":"px-3 py-3"}><a href="#about" onClick={()=>{update_(2)}}>About</a></li>
            <li className={(menu==3)?"active rounded-xl px-3 py-3":"px-3 py-3"}><a href="#contact" onClick={()=>{update_(3)}}>Contact</a></li>
        </ul>
    </nav>
  )
}

export default Navbar
