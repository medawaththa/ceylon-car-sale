export default function AboutUsPage() {
  return (
    <div style={styles.container}>
      <h1>About Us</h1>
      <p>
        Welcome to our online car sale platform! We are dedicated to connecting buyers and sellers with quality vehicles at competitive prices. Whether you’re looking for a compact city car, a family sedan, or something in between, we have a wide variety of options for you.
      </p>

      <h2>Our Mission</h2>
      <p>
        Our mission is to make car buying simple, transparent, and trustworthy. We believe everyone deserves an easy and reliable way to find their perfect car without the hassle.
      </p>

      <h2>What We Offer</h2>
      <ul>
        <li>Wide selection of verified used cars</li>
        <li>Detailed car descriptions and photos</li>
        <li>Easy-to-navigate website</li>
        <li>Secure communication between buyers and sellers</li>
        <li>Helpful customer support</li>
      </ul>

      <h2>Why Choose Us?</h2>
      <p>
        We carefully vet every listing and provide you with all the details you need to make an informed decision. Our platform is designed to be user-friendly and accessible from any device. Plus, our dedicated team is always here to assist you throughout your car buying journey.
      </p>

      <h2>Contact Us</h2>
      <p>
        Have questions? Feel free to reach out via our <a href="/contact" style={styles.link}>Contact Page</a>. We’d love to help you find the right car!
      </p>
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
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
  },
};
