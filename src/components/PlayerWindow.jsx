import React, { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaForwardStep, FaBackwardStep } from "react-icons/fa6";
import { FaPlay,FaPause,FaVolumeDown,FaVolumeUp } from "react-icons/fa";

const PlayerWindow = () => {
  const songs = [
    {
      name: "Amalgam",
      logo: `${process.env.PUBLIC_URL}/images/01.webp`,
      song_path: `${process.env.PUBLIC_URL}/Sounds/01.mp3`,
    },
    {
      name: "in-slow-motion",
      logo: `${process.env.PUBLIC_URL}/images/02.webp`,
      song_path: `${process.env.PUBLIC_URL}/Sounds/02.mp3`,
    },
  ];
  let { id } = useParams();

  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume,setVolume]=useState(0);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.ontimeupdate = () =>
        setCurrentTime(audioRef.current.currentTime);
      audioRef.current.onloadedmetadata = () =>
        setDuration(audioRef.current.duration);
      
    }
  }, []);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };


  const handleSeek = (event) => {
    audioRef.current.currentTime = event.target.value;
    setCurrentTime(event.target.value);
  };

  const handleForward = () => {
    audioRef.current.currentTime += 10;
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleBackward = () => {
    audioRef.current.currentTime -= 10;
    setCurrentTime(audioRef.current.currentTime);
  };
  const handleVolume=((event)=>{
    audioRef.current.volume=event.target.value/100;
    setVolume(audioRef.current.volume)
  })

  const increaseVolume = () => {
    if (audioRef.current.volume < 1) {
      audioRef.current.volume = Math.min(audioRef.current.volume + 0.1, 1);
      setVolume(audioRef.current.volume);
    }
  };

  const decreaseVolume = () => {
    if (audioRef.current.volume > 0) {
      audioRef.current.volume = Math.max(audioRef.current.volume - 0.1, 0);
      setVolume(audioRef.current.volume);
    }}

  const item = songs[id - 1];
  return (
    <div className="flex flex-col pt-[70px] justify-center items-center space-y-4">
      <div id="song_image" className="h-[200xp] w-[200px] rounded-lg">
        <img src={item.logo} className="rounded-lg" alt="Song" />
      </div>

      <div id="song-name">
        <p className="text-xl font-bold text-neutral-600">{item.name}</p>
      </div>
      <div id="scorller">
        <audio ref={audioRef} src={item.song_path}></audio>
        <div className="flex flex-row space-x-4">
          <p>
            {Math.floor(currentTime / 60)}:
            {Math.floor(currentTime % 60)
              .toString()
              .padStart(2, "0")}
          </p>
          <input
            type="range"
            min="0"
            max={duration}
            value={currentTime}
            onChange={handleSeek}
            className="w-[500px]"
          />
          <p>
            {Math.floor(duration / 60)}:
            {Math.floor(duration % 60)
              .toString()
              .padStart(2, "0")}
          </p>
        </div>

        <div id="controls">
          <div id="volume-buttons" className="flex flex-row space-x-10 justify-center py-8">
            <button onClick={decreaseVolume}><FaVolumeDown size={30}></FaVolumeDown></button>
            <input type="range" min={0} max={100} value={parseInt(volume*100)} onChange={handleVolume} className="w-[150px]"/>
            <button onClick={increaseVolume}><FaVolumeUp size={30}></FaVolumeUp></button>
          </div>

          <div className="flex flex-row space-x-10 justify-center py-8">
            <button onClick={handleBackward}>
              <FaBackwardStep size={30}></FaBackwardStep>
            </button>
            <button onClick={togglePlayPause}>
              {isPlaying ? <FaPause size={30}></FaPause> : <FaPlay size={30}></FaPlay>}
            </button>
            <button onClick={handleForward}>
              <FaForwardStep size={30}></FaForwardStep>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerWindow;
