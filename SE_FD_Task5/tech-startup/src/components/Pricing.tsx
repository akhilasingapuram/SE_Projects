import { CheckCircle, XCircle } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "₹0",
    description: "For personal use or testing your app before deploying to customers.",
    features: [
      { text: "Free for personal use", included: true },
      { text: "Limited access to templates", included: true },
      { text: "No custom branding", included: false },
      { text: "No customer support", included: false },
    ],
  },
  {
    name: "Essential",
    price: "₹500",
    description: "For simple desktop apps.",
    features: [
      { text: "Free for personal use", included: true },
      { text: "Access to all basic templates", included: true },
      { text: "Email support", included: true },
      { text: "Advanced analytics", included: false },
    ],
  },
  {
    name: "Professional",
    price: "₹2000",
    description: "For sophisticated desktop apps.",
    features: [
      { text: "Free for personal use", included: true },
      { text: "All templates + premium components", included: true },
      { text: "Priority email & chat support", included: true },
      { text: "Advanced analytics & reporting", included: true },
    ],
    mostPopular: true,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 px-4 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-10">Choose a plan that fits your needs</h2>
      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-lg p-6 shadow-md bg-white relative ${
              plan.mostPopular ? "border-2 border-blue-600" : ""
            }`}
          >
            {plan.mostPopular && (
              <span className="absolute top-0 right-0 bg-yellow-400 text-xs font-semibold px-3 py-1 rounded-bl-lg">
                Most Popular
              </span>
            )}

            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
            <p className="text-gray-600 mb-4">{plan.description}</p>

            <p className="text-3xl font-bold mb-4">{plan.price} <span className="text-sm font-normal">/month</span></p>

            <h4 className="font-semibold mb-2">Key Features</h4>
            <ul className="mb-6 space-y-2">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center space-x-2">
                  {feature.included ? (
                    <CheckCircle className="text-green-500" size={20} />
                  ) : (
                    <XCircle className="text-red-500" size={20} />
                  )}
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>

            <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
