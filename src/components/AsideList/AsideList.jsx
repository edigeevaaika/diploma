import "./AsideList.css";
import video from "../../assets/video.mp4";

export default function AsideList() {
  return (
    <div className="video">
        <video width="800" height="400" controls="controls" autoplay="autoplay">
          <source
            src={video}
            type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
          ></source>
        </video>
      </div>
  )
}