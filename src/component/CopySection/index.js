import { CopyToClipboard } from "react-copy-to-clipboard";
import { Copy } from "lucide-react";


const CopySection = (props) => {
  const { roomId } = props;

  return (
    <div className="left-6 bottom-11 flex flex-col absolute text-white border border-white rounded p-2">
      <div className="text-base">Copy Room ID:</div>
      <hr className="my-1" />
      <div className="flex items-center text-sm">
        <span>{roomId}</span>
        <CopyToClipboard text={roomId}>
          <Copy className="ml-3 cursor-pointer" />
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default CopySection;