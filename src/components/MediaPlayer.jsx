import React, { useEffect, useRef } from "react";
import Icon from "../common_components/Icon";
import EquizerIcon from "../assets/equalizer_2.svg";
import AddToPlaylist from "../assets/add_to_playlist.svg";
import ProfileCircle from "./ProfileCircle";
import Hls from "hls.js";

export const MediaPlayer = ({AudioSrc}) => {
   

  const AudioRef = useRef(null);
  
  useEffect(() => {
      if (Hls.isSupported()) {
          const hls = new Hls();
          hls.loadSource(AudioSrc);
          hls.attachMedia(AudioRef.current);
          console.log("supported !!")
          hls.on(Hls.Events.MANIFEST_PARSED, () => {
              console.log("Manifest loaded");
              AudioRef.current.play();
          });

          return () => hls.destroy();
      } else if (AudioRef.current.canPlayType("application/vnd.apple.mpegurl")) {
          // For Safari browsers
          AudioRef.current.src = AudioSrc;
          AudioRef.current.addEventListener("loadedmetadata", () => {
              AudioRef.current.play();
          });
      }
  }, [AudioSrc]);






  return (
    <div
      className="flex-1 flex items-center justify-center"
      style={{ height: "calc(100vh - 70px)" }}
    >
      <div className="max-w-[350px] h-[100%] flex-1 flex flex-col items-center pt-[40px]">
        <div>
          <ProfileCircle/>
        </div>
        <div className="w-[100%] max-w-[300px] mt-[40px] relative">
          <div className="flex justify-start">
            <Icon iconPath={EquizerIcon} />
            <span className="font-bold text-[#FAB74D] ml-[5px]">
              Walking The Wire
            </span>
          </div>
          <span className="font-medium text-[12px] text-[grey]">
            Jaylon Gouse, 2018
          </span>
          <div className="flex justify-start items-center mt-[5px]">
            <div className="h-[20px] w-[20px] bg-[blue] rounded-[5px]" />
            <span className="font-bold ml-[5px] text-[13px]">MAIN SQUARE</span>
          </div>
          <Icon iconPath={AddToPlaylist} size={35} style={{position: "absolute" , right: "0px",top: "0px"}}/>
        </div>

        {/* underline   */}
        <div className="min-h-[1px] w-[100%] max-w-[300px] bg-[#BABABA] my-[30px] flex-1"></div>

        <div className="w-[100%] max-w-[300px] pb-[85px] " style={{ scrollbarWidth: "none" }}>
          Tere bin jee na paunga Sach much mar hi jaunga Yeh tay hai, yeh tay
          hai Tu naseebon sa mere hathon pe Shuru se likha hai Mera haq hai tu
          aasmano se Mujhe jo ataa hai Tere kadmon pe jahan rakh doon main Kabhi
          jo kahe tu Koi shaq ho toh aazma lena Kisi din mujhe Maujood hai har
          saans mein Tu har dafa, yeh tay hai Tu hai dawa ya dard hai Par hai
          mera, yeh tay hai (x2) Tere bin jee na paunga Sach much mar hi jaunga
          Yeh tay hai, yeh tay hai. Tere bin jee na paunga Sach much mar hi
          jaunga Yeh tay hai, yeh tay hai Tu naseebon sa mere hathon pe Shuru se
          likha hai Mera haq hai tu aasmano se Mujhe jo ataa hai Tere kadmon pe
          jahan rakh doon main Kabhi jo kahe tu Koi shaq ho toh aazma lena Kisi
          din mujhe Maujood hai har saans mein Tu har dafa, yeh tay hai Tu hai
          dawa ya dard hai Par hai mera, yeh tay hai (x2) Tere bin jee na paunga
          Sach much mar hi jaunga Yeh tay hai, yeh tay hai.
        </div>

      </div>
      <video
        className="w-full h-full object-contain"
        ref={AudioRef}
        hidden
        // controls
      />
    </div>
  );
};
