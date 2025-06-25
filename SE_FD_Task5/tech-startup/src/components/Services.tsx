import {Code,Smartphone,Cloud} from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      desc: "Modern, fast and scalable websites.",
      icon:<Code size={40}/>,
    },
    {
      title: "App Development",
      desc: "Cross-platform mobile applications.",
      icon:<Smartphone size={40}/>,
    },
    {
      title: "cloud Solutions",
      desc: "Secure and scalable cloud deployments.",
      icon:<Cloud size={40}/>,
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-100" id="services">
      <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center">
            <div className="flex justify-center mb-4 text-blue-600">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Services;
