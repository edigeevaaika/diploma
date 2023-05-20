import "./AsideList.css";
import video from "../../assets/video.mp4";

export default function AsideList() {
  return (
    <div className="video">
      <video
        width="100%"
        controls="controls"
        // autoPlay="autoplay"
        loop="loop"
      >
        <source
          src={video}
          type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
        ></source>
      </video>
    </div>
  );
}
