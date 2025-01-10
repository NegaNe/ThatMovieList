import Navbar from '../components/navbar';
import '../../app/globals.css';

async function getNotes() {
  const res = await fetch('');
}

export default async function AboutPage() {
  return (
    <div>
      <Navbar />
      <h1>About Us</h1>
      <p>This is the About page.</p>
    </div>
  );
}



