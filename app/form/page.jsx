"use client";
import { useState } from "react";

export default function MiniForm() {
  const [responseData, setResponseData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      username: e.target.username.value,
      github: e.target.github.value,
      portfolio: e.target.portfolio.value,
    };
    console.log("Submitted:", data);


    const res = await fetch("/api/userdata", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });

    const result = await res.json();
    console.log("API Response:", result);

    if (result.success) {
      setResponseData(result.drill);
      console.log("Full API result:", result);
      console.log("User object:", result.user);

      alert("Data saved in MongoDB!");
      e.target.reset();
    } else {
      alert("Error saving data!");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-10 space-y-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm space-y-4  bg-black p-7 rounded-2xl shadow-md"
      >
        <h1 className="text-2xl font-bold text-white text-center mb-4">
          User Data Form
        </h1>
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="w-full p-3 border rounded-lg"
          required
        />

        <input
          type="url"
          name="github"
          placeholder="GitHub Link"
          className="w-full p-3 border rounded-lg"
          required
        />

        <input
          type="url"
          name="portfolio"
          placeholder="Portfolio Link"
          className="w-full p-3 border rounded-lg"
          required
        />

        <button
          type="submit"
          className="w-full bg-white text-black p-3 rounded-lg hover:opacity-90"
        >
          Submit
        </button>
      </form>
      {responseData && (
        <div className="mt-6 w-full max-w-sm bg-black border border-gray-300 p-4 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-2">Saved User Data:</h2>
          <p>
            <strong>Username:</strong> {responseData.username}
          </p>
          <p>
            <strong>GitHub:</strong> {responseData.github}
          </p>
          <p>
            <strong>Portfolio:</strong> {responseData.portfolio}
          </p>
          <p>
            <strong>ID:</strong> {responseData._id}
          </p>
        </div>
      )}
    </div>
  );
}
