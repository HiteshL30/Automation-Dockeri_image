import { useState } from "react";
import api from "../services/api";

function AddMessage() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    if (!name || !message) {
      alert("All fields required");
      return;
    }

    await api.post("/messages", { name, message });
    alert("Message added successfully!");
    setName("");
    setMessage("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add New Message</h2>
      <input
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br /><br />
      <input
        placeholder="Enter Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <br /><br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default AddMessage;
