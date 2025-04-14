
import { FormData } from "../types/types";
import { toast } from "@/hooks/use-toast";

// Note: You'll need to replace these with your actual Bot token and Chat ID
const BOT_TOKEN = "YOUR_BOT_TOKEN";
const CHAT_ID = "YOUR_CHAT_ID";

export const sendToTelegram = async (data: FormData): Promise<boolean> => {
  try {
    const text = `
🔔 *New Inquiry from Deepak Financial Services Website*
    
*Name:* ${data.name}
*Phone:* ${data.phone}
*Email:* ${data.email}
*Service:* ${data.service}
*Message:* ${data.message}
`;

    const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: text,
        parse_mode: "Markdown",
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to send message");
    }

    return true;
  } catch (error) {
    console.error("Error sending message to Telegram:", error);
    toast({
      title: "Message not sent",
      description: "There was a problem sending your message. Please try again later.",
      variant: "destructive",
    });
    return false;
  }
};
