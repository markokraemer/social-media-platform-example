import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

export default function SearchResults() {
  const router = useRouter();
  const { q } = router.query;
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (q) {
      // Mock search results
      const mockResults = [
        { id: 1, type: 'user', name: 'John Doe', bio: 'Software Developer' },
        { id: 2, type: 'user', name: 'Jane Smith', bio: 'Graphic Designer' },
        { id: 3, type: 'post', author: 'Mike Johnson', content: 'Just finished a great book! #reading' },
        { id: 4, type: 'post', author: 'Emily Brown', content: 'Beautiful sunset today 🌅' },
      ].filter(item => 
        item.name?.toLowerCase().includes(q.toLowerCase()) || 
        item.content?.toLowerCase().includes(q.toLowerCase())
      );
      setResults(mockResults);
    }
  }, [q]);

  return (
    <div className="max-w-4xl mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Search Results for "{q}"</h1>
      {results.length === 0 ? (
        <p>No results found.</p>
      ) : (
        results.map((result) => (
          <Card key={result.id} className="mb-4">
            <CardContent className="flex items-center p-4">
              {result.type === 'user' ? (
                <>
                  <Avatar className="mr-4">
                    <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${result.name}`} />
                    <AvatarFallback>{result.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <Link href={`/profile/${result.id}`} className="font-semibold hover:underline">
                      {result.name}
                    </Link>
                    <p className="text-sm text-gray-500">{result.bio}</p>
                  </div>
                </>
              ) : (
                <>
                  <Avatar className="mr-4">
                    <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${result.author}`} />
                    <AvatarFallback>{result.author[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{result.author}</p>
                    <p>{result.content}</p>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
}