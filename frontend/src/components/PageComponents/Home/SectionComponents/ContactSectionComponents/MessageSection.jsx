import { MessageForm } from "./MessageForm";

const MessageSection = () => {
  const handleSubmit = () => {};
  return (
    <div className=" flex justify-center h-full items-center w-full">
      <div className="w-100 h-full flex flex-col justify-center bg-[#0a2955]/30 backdrop-blur-sm rounded-xl">
        <div className="flex justify-center">
          <h1 className="text-3xl font-semibold">Send Message</h1>
        </div>
        <div>
          <MessageForm />
        </div>
      </div>
    </div>
  );
};
export default MessageSection;
