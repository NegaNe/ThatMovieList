import PocketBase from 'pocketbase';

export async function POST(req) {
    const pb = new PocketBase('http://127.0.0.1:8090');


    try {
        // Get the data from the request body
        const data = req.json();

        // Create a new record in the "users" collection
        const record = await pb.collection('users').create(data);

        // Return a success response
        return new Response(JSON.stringify({ id: record.id, message: 'User created successfully!' }), {
            status: 201,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        
        return new Response(JSON.stringify({error: error.message}),{
            status: 400,
            headers: {
                'content-type': 'application/json'
            }
        })
    }

}