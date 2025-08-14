import {startTransition, useOptimistic, useRef, useState} from "react";

async function deliverMessage(message) {
  await new Promise((res) => setTimeout(res, 1000));
  return message;
}

function Thread({ messages, sendMessageAction }) {
  function formAction() {
    addOptimisticMessage(new Date().getTime());
    startTransition(async () => {
      await sendMessageAction();
    });
  }
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (state, newMessage) => [
      {
        text: newMessage,
        sending: true
      },
      ...state,
    ]
  );

  return (
    <>
      <form>
        <button formAction={formAction} type="submit">发送</button>
      </form>
      {optimisticMessages.map((message, index) => (
        <div key={index}>
          {message.text}
          {!!message.sending && <small>（发送中……）</small>}
        </div>
      ))}
    </>
  );
}

export default function Optimistic() {
  const [messages, setMessages] = useState([
    { text: "你好，在这儿！", sending: false, key: 1 }
  ]);
  async function sendMessageAction(formData) {
    const sentMessage = await deliverMessage(new Date().getTime());
    startTransition(() => {
      setMessages((messages) => [{ text: sentMessage }, ...messages]);
    })
  }
  return <Thread messages={messages} sendMessageAction={sendMessageAction} />;
}
