import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Post } from "@/components/Post";

export default function Home() {
  const [posts, setPosts] = useState([
    { id: 1, author: 'John Doe', content: 'Just launched my new startup! Excited for this journey. #entrepreneurlife', likes: 15, comments: 5 },
    { id: 2, author: 'Jane Smith', content: 'Beautiful day for a hike! 🏞️ #naturelovers', likes: 22, comments: 7 },
    { id: 3, author: 'Mike Johnson', content: 'Anyone else binge-watching the new series on Netflix? No spoilers please! 📺', likes: 8, comments: 12 },
  ]);

  const [newPost, setNewPost] = useState('');

  const handlePostSubmit = () => {
    if (newPost.trim()) {
      const post = {
        id: posts.length + 1,
        author: 'Current User',
        content: newPost,
        likes: 0,
        comments: 0,
      };
      setPosts([post, ...posts]);
      setNewPost('');
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="mb-8">
        <CardContent className="pt-6">
          <Input
            placeholder="What's on your mind?"
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            className="mb-4"
          />
          <Button onClick={handlePostSubmit}>Post</Button>
        </CardContent>
      </Card>

      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}