import React, { useState } from "react";
import Icon from "../common_components/Icon";
import EquizerIcon from "../assets/equalizer.svg"
import PlayIcon from "../assets/play.svg";
import PauseIcon from "../assets/pause.svg";
import NextSongIcon from "../assets/skip_next.svg";
import PreviousSongIcon from "../assets/skip_previous.svg";
import CloseIcon from "../assets/close.svg";
import FastForward from "../assets/fast_forward.svg";


export const BottomBar = () => {
  const [isPlay , setIsPlay] = useState(true);


  return (
    <div className="h-[74px]  w-screen bg-black fixed bottom-0  flex flex-col">
      <div className= "min-h-[4px] w-screen  bg-[#ffebc4] flex-1" > 
      <div className= "min-h-[4px] w-[30%]  bg-[#FCB13D] flex-1" > 
     </div>
          
      </div>
      <div className=" w-screen  h-[70px] flex items-center pr-[20px] sm:pr-[100px] pl-[20px] justify-between">
      <div className="flex">
        <Icon iconPath={EquizerIcon} />
        <span className="text-[white] ml-[5px]">Problem - Dino James</span> 
      </div>

      <div className="flex justify-evenly w-[180px]">
          
          {/* for playing previous song 
         <Icon iconPath={PreviousSongIcon} />  */}
        
         <Icon iconPath={FastForward} style={{transform: "scaleX(-1)"}}/>
         <div onClick={()=>{setIsPlay(!isPlay)}} className="h-[45px] w-[45px] bg-[white] rounded-[40px] flex justify-center items-center">
         <Icon iconPath={isPlay ? PauseIcon:PlayIcon} size={30}/></div>
         <Icon iconPath={FastForward} />
          
          {/* for playing next song 
          <Icon iconPath={NextSongIcon} /> */}
         
         <Icon iconPath={CloseIcon}/>


        {/* <span className="text-[white] ml-[5px]">Problem - Dino James</span>  */}
      </div>
    </div>
    </div>
  );
};
