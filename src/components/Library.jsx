import React from 'react'
import SongBillboard from './song-billboard'
const Library = () => {

    const songs=[{name:"Amalgam",logo:`${process.env.PUBLIC_URL}/images/01.webp`,song_path:"public/Sounds/amalgam-217007.mp3"},{name:"in-slow-motion",logo:`${process.env.PUBLIC_URL}/images/02.webp`,song_path:"public/Sounds/in-slow-motion-inspiring-ambient-lounge-219592.mp3"}]
    
  return (
    <div className='basis-[20%]  overflow-y-scroll shadow-2xl bg-blue-400'>
        <div className='p-6 py-8 sticky top-2 text-3xl font-semibold'>
            <p>Library</p>
        </div>
        <div className='flex flex-col'>
            {songs.map((e,index)=>(<SongBillboard key={index} id={index+1} name={e.name} logo={e.logo} song_path={e.song_path}></SongBillboard>))}
        </div>
    </div>
  )
}

export default Library