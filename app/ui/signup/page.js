'use client'

export default function SignupPage() {

  async function onSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.target)

    const data = 
    {
        email: formData.get('email'),
        password: formData.get('password'),
        passwordConfirm: formData.get('passwordConfirm')

    }
try{
    const response = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)

    });
    if (!response.ok) {
        const errorData = await response.json();
        console.error('Error:', errorData);
        alert(`Error: ${errorData.error}`);
        return;
    }

    // Parse the response
    const result = await response.json();
    console.log('Success:', result);
    alert(`User created! ID: ${result.id}`);
} catch (error) {
    console.error('Error:', error);
    alert('Something went wrong.');
}  }

  return (
    <form onSubmit={onSubmit}>
      <input type="email" name="email" placeholder="Email" required />
      <input type="password" name="password" placeholder="Password" required />
      <input type="password" name="passwordConfirm" placeholder="Password" required />
      
      <button type="submit">Sign up</button>
    </form>
  )

}