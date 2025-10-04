import { useMessageStore } from "../store/message-store";
import { useMutation } from "@tanstack/react-query";
import { askAssistantService } from "../services/message";
import { toast } from "sonner";

const useAskService = () => {
  const { setMessages, setText, text } = useMessageStore();

  const { mutate, isPending } = useMutation({
    mutationFn: askAssistantService,
    onSuccess: (data) => {
      setMessages({ role: "assistant", content: data.message });
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const handleSend = async (queryText: string) => {
    if (!queryText.trim()) {
      toast.warning("Please ask something first");
      return;
    }
    setMessages({ role: "user", content: queryText });
    setText("");
    let dataToSend = {
      text: queryText,
    };
    mutate(dataToSend);
  };
  console.log(isPending, "from the Service");

  return { mutate, isPending, handleSend };
};

export default useAskService;
