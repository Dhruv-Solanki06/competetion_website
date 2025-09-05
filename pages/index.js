import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", college: "" });
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    router.push("/main"); // placeholder redirect
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left: Info Section */}
      <div className="flex-1 bg-gradient-to-br from-purple-600 to-indigo-800 text-white flex flex-col justify-center items-center p-10">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-center">
          AI Reel Making Competition
        </h1>
        <p className="text-lg md:text-xl mb-4 text-center">
          Celebrate <span className="font-semibold">Vasudhaiva Kutumbakam</span> through creativity ✨
        </p>
        <p className="text-md md:text-lg mb-6 text-center">
          12 Weeks • 12 Principles • 15 Seconds • Prize Pool • Weekly Winners
        </p>
        <p className="italic">“One World, One Family, One Reel at a Time.”</p>
      </div>

      {/* Right: Registration Form */}
      <div className="flex-1 bg-gray-100 flex flex-col justify-center items-center p-10">
        <h2 className="text-2xl font-bold mb-6">Register Now</h2>
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
          <input type="text" name="name" placeholder="Full Name" value={form.name} onChange={handleChange} className="w-full p-3 border rounded-lg" required />
          <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} className="w-full p-3 border rounded-lg" required />
          <input type="tel" name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} className="w-full p-3 border rounded-lg" required />
          <input type="text" name="college" placeholder="College / Organization" value={form.college} onChange={handleChange} className="w-full p-3 border rounded-lg" required />
          <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
