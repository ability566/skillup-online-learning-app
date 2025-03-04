import { FaChalkboardTeacher, FaTools, FaFileAlt, FaClock, FaCertificate, FaNetworkWired } from "react-icons/fa";

const FeaturesSection = () => {

  const features = [
    {
      title: "Expert Instructors",
      description: "Learn from industry professionals with real-world experience.",
      icon: <FaChalkboardTeacher className="w-12 h-12 mx-auto text-blue-600" />,
    },
    {
      title: "Hands-on Project Work",
      description: "Work on real-world case studies using Python and R programming.",
      icon: <FaTools className="w-12 h-12 mx-auto text-blue-600" />,
    },
    {
      title: "Career Support",
      description: "Receive resume review, job placement assistance, and interview coaching.",
      icon: <FaFileAlt className="w-12 h-12 mx-auto text-blue-600" />,
    },
    {
      title: "Flexible Learning",
      description: "Access courses anytime, anywhere with self-paced and live sessions.",
      icon: <FaClock className="w-12 h-12 mx-auto text-blue-600" />,
    },
    {
      title: "Certification",
      description: "Earn a recognized certificate upon course completion to boost your career.",
      icon: <FaCertificate className="w-12 h-12 mx-auto text-blue-600" />,
    },
    {
      title: "Community & Networking",
      description: "Join a supportive community of learners and industry professionals.",
      icon: <FaNetworkWired className="w-12 h-12 mx-auto text-blue-600" />,
    },
  ];

  return (
    <section className="bg-gradient-to-r from-blue-50 to-gray-50 py-20 px-6">
      <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">Key Features</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-8 bg-white rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 text-center"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">{feature.title}</h3>
            <p className="text-gray-700">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;