import { Label } from "@radix-ui/react-label";
import { Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

const MessageBox: React.FC = () => {
  const [messageText, setMessageText] = useState<string>("");

  const sendMessage = async (message: string) => {};

  const onSendClick = () => {
    if (!messageText) return;
    sendMessage(messageText);
    toast.success("Повідомлення відправлено", {
      description: messageText,
    });
    setMessageText("");
  };
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor="message">Поле, щоб привітатись.</Label>
      <Textarea
        value={messageText}
        onChange={(e) => {
          setMessageText(e.target.value);
        }}
        placeholder="Type your message here."
        id="message"
      />
      <Button onClick={onSendClick} disabled={!messageText}>
        <Send className="w-4 h-4 mr-2" /> Відправити
      </Button>
    </div>
  );
};

export default MessageBox;
