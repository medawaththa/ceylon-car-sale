import { useState } from 'react';

export default function ContactUsPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just simulate submission
    setSubmitted(true);
  };

  return (
    <div style={styles.container}>
      <h1>Contact Us</h1>
      <p>If you have any questions or need assistance, feel free to reach out!</p>
      <div style={styles.info}>
        <p><strong>Email:</strong> support.CeylonCarSales@gmail.com</p>
        <p><strong>Phone:</strong> 025 222 8778</p>
        <p><strong>Address:</strong> 123 Stage 2, Anuradhapura, Sri Lanka</p>
      </div>

      {!submitted ? (
        <form onSubmit={handleSubmit} style={styles.form}>
          <label style={styles.label}>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </label>
          <label style={styles.label}>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </label>
          <label style={styles.label}>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              style={styles.textarea}
              required
            />
          </label>
          <button type="submit" style={styles.button}>Send Message</button>
        </form>
      ) : (
        <p style={styles.thankYou}>Thank you for contacting us! We will get back to you soon.</p>
      )}
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#ffffff',
    padding: '2rem',
    width: '100%',
    maxWidth: '1000px',
    margin: '2rem auto',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    borderRadius: '8px',
    color: '#000',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
    textAlign: 'left',
  },
  info: {
    marginBottom: '2rem',
    fontSize: '1.1rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    fontWeight: 'bold',
    fontSize: '1rem',
    color: '#000',
  },
  input: {
    padding: '0.5rem',
    fontSize: '1rem',
    marginTop: '0.25rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontFamily: 'inherit',
  },
  textarea: {
    padding: '0.5rem',
    fontSize: '1rem',
    marginTop: '0.25rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontFamily: 'inherit',
    resize: 'vertical',
    minHeight: '100px',
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '0.75rem',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  thankYou: {
    fontSize: '1.2rem',
    color: '#007bff',
    fontWeight: 'bold',
  },
};
