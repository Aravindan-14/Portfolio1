import React from 'react'

function MobNav() {
    return (
        <div className='bg-black/20 h-[50%] w-full p-5 md:hidden '>
            <ul className='text-white flex flex-col gap-5 font-semibold items-center'>
                <a href='/'><li className='hover:text-pink-600'>Home</li></a>
                <a href='#about'><li className='hover:text-pink-600'>About</li></a>
                <a href='#skill'> <li className='hover:text-pink-600'>Skill</li></a>
                <a href='#Professional'><li className='hover:text-pink-600'>Professional</li></a>
                <a href='#education'><li className='hover:text-pink-600'>Education</li></a>
            </ul>
        </div>
    )
}

export default MobNav
