import React from 'react'
import "./Header.css"
const Header = () => {
  return (
    <section className='header'>
        <div className='flex paddings h-container'>

        <div className='logo'>
            <img src="./Logo.png" alt='logo' width={100} height={50}/>
            </div>

            <div className='flexCenter h-menu'>
            <a href = "">Home</a>
                <a href = ""> Marketplace</a>
                <a href = "">Courselist </a>
                <a href = "">About </a>
                <button className='button'>
                    <a href = "">Get Started</a>

                </button>
                

            </div>

        </div>

    </section>
  )
}

export default Header
