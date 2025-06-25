import { useState } from "react";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission, e.g., sending data to an API
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" }); // Reset form
  };

  return (
    <section className="py-16 px-4 bg-gray-50 text-center mb-8" id="appointment">
      <h2 className="text-3xl font-bold mb-4">Book an Appointment</h2>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
        <input
          type="name"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-3 border rounded"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full p-3 border rounded"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="message"
          name="message"
          placeholder="Your Message"
          required
          className="w-full p-3 border rounded"
          value={formData.message}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </section>
  );
};
export default AppointmentForm;
