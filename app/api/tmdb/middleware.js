export async function middleware(req) {
    const { pathname } = req.nextUrl;
  
    // Only handle requests that should interact with TMDb API
    if (pathname.startsWith('/api/tmdb')) {
      const apiKey = process.env.TMDB_API_KEY;
      const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
  
      try {
        const response = await fetch(url);
  
        if (!response.ok) {
          throw new Error('Failed to fetch data from TMDb');
        }
  
        const data = await response.json();
  
        req.tmdbData = data;
  
      } catch (error) {
        console.error('Error fetching data from TMDb:', error);
        return new Response('Error fetching data', { status: 500 });
      }
    }
  
    return NextResponse.next();
  }
  