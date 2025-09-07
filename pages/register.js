import { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    competition: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Hook this up with backend / Google Sheets / Firebase
    console.log("Form submitted:", form);
    alert("Registration successful! ✅");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-orange-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-lg w-full">
        <h1 className="text-3xl font-bold text-orange-800 mb-6 text-center">
          Competition Registration
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border border-orange-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border border-orange-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <select
            name="competition"
            value={form.competition}
            onChange={handleChange}
            required
            className="w-full border border-orange-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="">Select Competition</option>
            <option value="ai-reels">AI Reel Making</option>
            <option value="lextoons">Lextoons</option>
            <option value="political-toons">Political Toons</option>
          </select>

          <button
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-lg transition-all"
          >
            Register Now
          </button>
        </form>
      </div>
    </div>
  );
}
