import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const now = new Date();

    const mainEmailParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      date: now.toLocaleDateString(),
      time: now.toLocaleTimeString(),
    };

    const autoReplyParams = {
      name: formData.name,
      title: formData.message,
      date: now.toLocaleDateString(),
      time: now.toLocaleTimeString(),
      to_email: formData.email,
    };

    try {
      // Send main email
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        mainEmailParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // Send auto-reply
      emailjs
        .send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID,
          autoReplyParams,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .catch((err) => console.error("Auto-reply failed:", err));

      setStatus("Message sent successfully! ✅");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Main email failed:", error);
      setStatus("Failed to send message. Try again later. ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 px-6 md:px-20 mx-auto max-w-xl">
      <h1 className="text-3xl font-bold mb-6">Contact Me</h1>
      <p className="mb-6">
        I’m always open to connecting! Whether you have a project, an idea, or
        just want to say hello, feel free to reach out to me.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-1 font-semibold">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-400 px-3 py-2 rounded focus:outline-none focus:ring focus:ring-blue-200"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1 font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-400 px-3 py-2 rounded focus:outline-none focus:ring focus:ring-blue-200"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="mb-1 font-semibold">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className="border border-gray-400 px-3 py-2 rounded focus:outline-none focus:ring focus:ring-blue-200"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`px-4 py-2 rounded text-white ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {status && <p className="mt-2 text-sm">{status}</p>}
      </form>
    </section>
  );
};

export default Contact;
