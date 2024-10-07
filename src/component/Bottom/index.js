import { Mic, Video, PhoneOff, MicOff, VideoOff } from "lucide-react";

const Bottom = (props) => {
  const { muted, playing, toggleAudio, toggleVideo, leaveRoom } = props;

  return (
    <div className='absolute flex justify-between bottom-5 left-0 right-0 mx-auto'>
      {muted ? (
        <MicOff
          className="icon active"
          size={55}
          onClick={toggleAudio}
        />
      ) : (
        <Mic className="icon" size={55} onClick={toggleAudio} />
      )}
      {playing ? (
        <Video className="icon" size={55} onClick={toggleVideo} />
      ) : (
        <VideoOff
          className="icon active"
          size={55}
          onClick={toggleVideo}
        />
      )}
      <PhoneOff size={55} className="icon" onClick={leaveRoom}/>
    </div>
  );
};

export default Bottom;
