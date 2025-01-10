import Navbar from '../components/navbar';

async function getNotes() {
  const res = await fetch('');
}

export default async function AboutPage() {
  return (
    <div>
      <Navbar />
      <h1>Contact Me!</h1>
      <p>This is the About page.</p>
    </div>
  );
}



