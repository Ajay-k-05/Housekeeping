import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // only if you use React Router

const ContactForm = () => {
  const navigate = useNavigate(); // React Router hook
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you could send formData to a server with fetch/axios
    // e.g. await fetch('/api/contact', {method:'POST', body:JSON.stringify(formData)})

    setSuccess(true);
    setFormData({ name: "", email: "", subject: "", message: "" });

    // redirect to home page after 3 seconds
    setTimeout(() => {
      navigate("/"); // or window.location.href = "/"
    }, 3000);
  };

  return (
    <div className="row no-gutters">
      <div className="col-md-7">
        <div className="contact-wrap w-100 p-md-5 p-4">
          <h3 className="mb-4">Contact Us</h3>

          {success && (
            <div className="mb-4 alert alert-success">
              ✅ Thanks for contacting us! Redirecting to home…
            </div>
          )}

          <form
            id="contactForm"
            name="contactForm"
            className="contactForm"
            onSubmit={handleSubmit}
          >
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label className="label" htmlFor="name">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    id="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label className="label" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group">
                  <label className="label" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group">
                  <label className="label" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    name="message"
                    className="form-control"
                    id="message"
                    cols="30"
                    rows="4"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group">
                  <input
                    type="submit"
                    value="Send Message"
                    className="btn btn-primary"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="col-md-5 d-flex align-items-stretch">
        <div
          className="info-wrap w-100 p-5 img"
          style={{
            backgroundImage: "url('/assets/images/about.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "700px"
          }}
          data-stellar-background-ratio="0.5"
        ></div>
      </div>
    </div>
  );
};

export default ContactForm;
