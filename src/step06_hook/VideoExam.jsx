import React, { useRef } from "react";

// 이렇게도 작성할 수 있다.
// export default function VideoExam(params) {
//     return(

//     )
// }

function VideoExam(params) {
    // useRef를 videoRef 변수에 저장
    const videoRef = useRef(null);

    const playVideo = ()=>{
        videoRef.current.play();
    }
    const pauseVideo = ()=>{
        videoRef.current.pause();
        // videoRef.current.remove();
    }
    return(
        <div>
            <div>
                <button onClick={playVideo}>play</button>
                <button onClick={pauseVideo}>pause</button>
            </div>
            <video ref={videoRef} width="320" height="240" controls>
                <source 
                    type="video/mp4"
                    src="https://player.vimeo.com/external/544643152.sd.mp4?s=7dbf132a4774254dde51f4f9baabbd92f6941282&profile_id=165"

                />
            </video>
        </div>
    )
}

export default VideoExam;