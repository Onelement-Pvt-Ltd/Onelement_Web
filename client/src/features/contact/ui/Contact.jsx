import { useState } from "react";
import { ArrowUpRight, Mail, MapPin, Send } from "lucide-react";
import Seo from "@/shared/seo/Seo";
import { breadcrumbSchema } from "@/shared/seo/seoData";
import { submitContactForm } from "../api/contactApi";
import "./Contact.css";

const initialForm = {
  name: "",
  email: "",
  comments: "",
  website: "",
};

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    if (status !== "idle") {
      setStatus("idle");
      setMessage("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    try {
      const result = await submitContactForm({
        name: form.name.trim(),
        email: form.email.trim(),
        comments: form.comments.trim(),
        website: form.website,
      });
      setForm(initialForm);
      setStatus("success");
      setMessage(result.message || "Thank you. Your message has been sent.");
    } catch (error) {
      setStatus("error");
      setMessage(error.message);
    }
  };

  return (
    <main className="contact-page">
      <Seo
        title="Contact Us"
        description="Contact Onelement Energy in Hyderabad to discuss clean energy, carbon capture, E-Fuel, fuel cell and green hydrogen opportunities."
        path="/contact"
        structuredData={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact Us", path: "/contact" },
        ])}
      />

      <section className="contact-stage" aria-labelledby="contact-title">
        <div className="contact-stage__glow" aria-hidden="true" />
        <div className="contact-shell contact-layout">
          <div className="contact-intro">
            <p className="contact-eyebrow">Start a conversation</p>
            <h1 id="contact-title">Let's build practical climate solutions together.</h1>
            <p className="contact-intro__copy">
              Tell us what you are working on. Our team will review your message and route it
              to the right person.
            </p>

            <address className="contact-address">
              <a href="mailto:web@onelement.in">
                <span className="contact-icon"><Mail aria-hidden="true" size={20} /></span>
                <span><small>Email</small>web@onelement.in</span>
                <ArrowUpRight aria-hidden="true" size={17} />
              </a>
              <div>
                <span className="contact-icon"><MapPin aria-hidden="true" size={20} /></span>
                <span><small>Location</small>Hyderabad, Telangana, India</span>
              </div>
            </address>
          </div>

          <div className="contact-form-card">
            <div className="contact-form-heading">
              <p className="contact-eyebrow">Send a message</p>
              <h2>How can we help?</h2>
              <p>All fields are required.</p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-field">
                <label htmlFor="contact-name">Name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={updateField}
                  minLength={2}
                  maxLength={80}
                  required
                  placeholder="Your full name"
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={updateField}
                  maxLength={254}
                  required
                  placeholder="you@company.com"
                />
              </div>

              <div className="contact-field">
                <div className="contact-label-row">
                  <label htmlFor="contact-comments">Comments</label>
                  <span>{form.comments.length}/3000</span>
                </div>
                <textarea
                  id="contact-comments"
                  name="comments"
                  value={form.comments}
                  onChange={updateField}
                  minLength={10}
                  maxLength={3000}
                  rows={7}
                  required
                  placeholder="Tell us about your project or enquiry..."
                />
              </div>

              <div className="contact-honeypot" aria-hidden="true">
                <label htmlFor="contact-website">Website</label>
                <input
                  id="contact-website"
                  name="website"
                  type="text"
                  value={form.website}
                  onChange={updateField}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <button className="contact-submit" type="submit" disabled={status === "submitting"}>
                <span>{status === "submitting" ? "Sending..." : "Send message"}</span>
                <Send aria-hidden="true" size={18} />
              </button>

              {message && (
                <div
                  className={`contact-status${status === "error" ? " contact-status--error" : ""}`}
                  role={status === "error" ? "alert" : "status"}
                  aria-live="polite"
                >
                  {message}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
