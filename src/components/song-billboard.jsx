import React from 'react'
import { Link } from 'react-router-dom'
const SongBillboard = ({name,logo,song_path,id}) => {
  return (
    <Link className='flex flex-row px-5 space-x-4 py-3 hover:bg-pink-300' to={`songs/${id}`}>
        <div className='h-[70px] w-[70px]'><img src={logo} alt="logo" /></div>
        <p className='self-center text-neutral-600'>{name}</p>
    </Link>
  )
}

export default SongBillboard