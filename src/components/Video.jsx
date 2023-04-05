import { useRef, useState } from "react"
import video from "../img/video.mp4"

const VideoBlock = () => {
    const [activeVideo, setActiveVideo] = useState(null);
    const [isPlaying1, setIsPlaying1] = useState(false);
    const [isPlaying2, setIsPlaying2] = useState(false);
    const videoRef1 = useRef(null);
    const videoRef2 = useRef(null);
    const togglePlay = (videoRef, isPlaying, setIsPlaying, videoId) => {
        if (activeVideo !== null && activeVideo !== videoId) {
        const activeVideoRef = activeVideo === 1 ? videoRef1 : videoRef2;
        activeVideoRef.current.pause();
        setActiveVideo(null);
        setIsPlaying1(false);
        setIsPlaying2(false);
        }
        setIsPlaying((prev) => !prev);
        isPlaying ? videoRef.current.pause() : videoRef.current.play();
        setActiveVideo(videoId);
    };
    return (
        <div className="page__video video" id="video">
			<div className="video__container">
					<div className="video__inform">
                        <h1 className="video__title"><span>Наш</span> відео-блог
                            та діяльність</h1>
                        <p className="video__sub-title">З нашого відео блогу ви дізнаєтесь про життя притулку. Розповідаючи історії окремих песиків, ми звітуватимемо про нашу діяльність. Згадуватимемо тих, хто допоміг врятувати тварину та яка її подальша доля.</p>
                        </div>
                        <div className="video__videos videos">
                        <div className="videos__block">
                            <video src={video} ref={videoRef1} preload={"1"} playsInline  onLoad={(e) => e.preventDefault()}></video>
                            <button className="videos__play play1" onClick={() => togglePlay(videoRef1, isPlaying1, setIsPlaying1 , 1)}><i className="icon-play"></i></button>
                        </div>
                        <div className="videos__block">
                            <video src={video} ref={videoRef2} preload={"1"} playsInline  onLoad={(e) => e.preventDefault()}></video>
                            <button className="videos__play play2"  onClick={() => togglePlay(videoRef2, isPlaying2, setIsPlaying2 , 2)}><i className="icon-play"></i></button>
                        </div>
			        </div>
		    </div>
        </div>
    )
}

export { VideoBlock }