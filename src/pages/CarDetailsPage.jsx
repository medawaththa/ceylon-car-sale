import { useParams } from 'react-router-dom';

const cars = [
  { id: 1, name: 'Toyota Corolla', price: '$18,000', year: 2018, description: 'Reliable and fuel-efficient compact sedan.', image: '/car1.png' },
  { id: 2, name: 'Honda Civic', price: '$20,000', year: 2019, description: 'Comfortable and efficient daily driver.', image: '/car2.png' },
  { id: 3, name: 'Nissan Sentra', price: '$19,500', year: 2020, description: 'Affordable and spacious with modern features.', image: '/car3.png' },
  { id: 4, name: 'Hyundai Elantra', price: '$18,800', year: 2021, description: 'Stylish and safe with great mileage.', image: '/car4.png' },
  { id: 5, name: 'Suzuki Swift', price: '$14,000', year: 2017, description: 'Compact hatchback perfect for city driving.', image: '/car5.jpg' },
  { id: 6, name: 'Kia Picanto', price: '$13,500', year: 2016, description: 'Small, affordable, and easy to maintain.', image: '/car6.jpg' },
  { id: 7, name: 'Toyota Axio', price: '$17,200', year: 2018, description: 'Comfortable family car with good reliability.', image: '/car7.jpg' },
  { id: 8, name: 'Mazda Demio', price: '$15,600', year: 2019, description: 'Fun to drive and easy to park.', image: '/car8.jpg' },
  { id: 9, name: 'Perodua Myvi', price: '$12,000', year: 2017, description: 'Economical and compact with surprising space.', image: '/car9.jpg' },
];

export default function CarDetailsPage() {
  const { id } = useParams();
  const car = cars.find((c) => c.id === parseInt(id));

  if (!car) {
    return (
      <div style={styles.wrapper}>
        <p style={{ textAlign: 'center', color: '#000' }}>Car not found.</p>
      </div>
    );
  }

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <h1 style={styles.heading}>{car.name}</h1>
        <img src={car.image} alt={car.name} style={styles.image} />
        <p style={styles.text}><strong>Price:</strong> {car.price}</p>
        <p style={styles.text}><strong>Year:</strong> {car.year}</p>
        <p style={styles.description}>{car.description}</p>
      </div>
    </div>
  );
}

// Styles
const styles = {
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f2f2f2',
    padding: '1rem',
  },
  container: {
  backgroundColor: '#fff',
  padding: '2rem',
  width: '90%',           // allow responsive width
  maxWidth: '900px',      // more spacious layout
  boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  borderRadius: '8px',
  color: '#000',
  textAlign: 'center',
},

  heading: {
    fontSize: '2rem',
    marginBottom: '1rem',
    color: '#000',
  },
  image: {
    width: '100%',
    maxHeight: '400px',
    objectFit: 'cover',
    borderRadius: '6px',
    marginBottom: '1rem',
  },
  text: {
    fontSize: '1.1rem',
    margin: '0.5rem 0',
    color: '#000',
  },
  description: {
    fontSize: '1rem',
    marginTop: '1rem',
    color: '#000',
  },
};
