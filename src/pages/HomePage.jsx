import { Link } from 'react-router-dom';

const cars = [
  { id: 1, name: 'Toyota Corolla', price: '$18,000', image: '/car1.png' },
  { id: 2, name: 'Honda Civic', price: '$20,000', image: '/car2.png' },
  { id: 3, name: 'Nissan Sentra', price: '$19,500', image: '/car3.png' },
  { id: 4, name: 'Hyundai Elantra', price: '$18,800', image: '/car4.png' },
  { id: 5, name: 'Suzuki Swift', price: '$14,000', image: '/car5.jpg' },
  { id: 6, name: 'Kia Picanto', price: '$13,500', image: '/car6.jpg' },
  { id: 7, name: 'Toyota Axio', price: '$17,200', image: '/car7.jpg' },
  { id: 8, name: 'Mazda Demio', price: '$15,600', image: '/car8.jpg' },
  { id: 9, name: 'Perodua Myvi', price: '$12,000', image: '/car9.jpg' },
];

export default function HomePage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Available Cars</h1>
      <div style={styles.grid}>
        {cars.map((car) => (
          <div key={car.id} style={styles.card}>
            <img src={car.image} alt={car.name} style={styles.image} />
            <h3 style={styles.carName}>{car.name}</h3>
            <p style={styles.price}>Price: {car.price}</p>
            <Link to={`/car/${car.id}`} style={styles.link}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

// Inline styles with black font color
const styles = {
  container: {
    backgroundColor: '#ffffff',
    padding: '2rem',
    minHeight: '100vh',
    color: '#000000', // default text color
  },
  title: {
    textAlign: 'center',
    fontSize: '2rem',
    marginBottom: '2rem',
    color: '#000',
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1.5rem',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    padding: '1rem',
    width: '250px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    textAlign: 'center',
    color: '#000', // ensure black font
  },
  image: {
    width: '100%',
    height: '160px',
    objectFit: 'cover',
    borderRadius: '6px',
    marginBottom: '1rem',
  },
  carName: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    margin: '0.5rem 0',
    color: '#000',
  },
  price: {
    fontWeight: 'bold',
    margin: '0.5rem 0',
    color: '#000',
  },
  link: {
    display: 'inline-block',
    marginTop: '0.5rem',
    textDecoration: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
  },
};
