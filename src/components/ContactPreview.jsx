import { useNavigate } from "react-router-dom";

const ContactPreview = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-16 text-center">
      <div className="max-w-screen-md mx-auto">
        <h2 className="text-3xl font-bold mb-4">Interested in working together?</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Feel free to reach out to discuss projects, collaborations, or any questions you have.
        </p>
        <button
          onClick={() => navigate("/contact")}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg"
        >
          Contact Me
        </button>
      </div>
    </section>
  );
};

export default ContactPreview;
