//Footer with link to the Contact Page
import { useNavigate } from "react-router-dom";

const ContactPreview = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-black text-white py-16 text-center">
      <div className="max-w-screen-md mx-auto">
        <h2 className="text-3xl font-bold mb-4">Interested in working together?</h2>
        <p className="text-gray-400 mb-6">
          Feel free to reach out to discuss projects, collaborations, or any questions you have.
        </p>
        <button
          onClick={() => navigate("/contact")}
          className="border-2 border-white text-white px-6 py-2 rounded-lg text-sm tracking-wide uppercase transition hover:bg-white hover:text-black"
        >
          Contact Me
        </button>
      </div>
    </section>
  );
};

export default ContactPreview;
