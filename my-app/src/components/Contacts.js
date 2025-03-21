import { useState } from "react";
import "../App.css";
import "../assets/css/variables.css";
import "../assets/css/contacts.css";

function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contacts-container">
      <h1 className="contacts-title"> Let's talk!</h1>
      <p className="contacts-text">
        Se tiveres alguma dúvida ou quiseres falar sobre um projeto, preenche o
        formulário abaixo e entrarei em contacto contigo o mais breve possível.
      </p>

      {submitted ? (
        <p className="success-message">
          Obrigado pela tua mensagem! Entrarei em contacto em breve. 😊
        </p>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Mensagem:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit" className="submit-button">
            Enviar
          </button>
        </form>
      )}

      <div className="contact-info">
        <p>
          Email:{" "}
          <a href="mailto:catarinaseemannui@gmail.com">
            catarinaseemannui@gmail.com
          </a>
        </p>
        <p>Redes Sociais:</p>
        <div className="social-icons">
          <a href="#" className="icon">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="icon">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="icon">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
