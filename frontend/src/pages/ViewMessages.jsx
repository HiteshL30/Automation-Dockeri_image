import { useEffect, useState } from "react";
import api from "../services/api";

function ViewMessages() {
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    const res = await api.get("/messages");
    setMessages(res.data);
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>All Messages</h2>
      {messages.length === 0 ? (
        <p>No messages found</p>
      ) : (
        <ul>
          {messages.map((msg) => (
            <li key={msg._id}>
              <strong>{msg.name}</strong>: {msg.message}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ViewMessages;