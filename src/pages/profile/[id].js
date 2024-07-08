import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Post } from "@/components/Post";

export default function Profile() {
  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (id) {
      // TODO: Fetch user data and posts from API
      setUser({
        id: id,
        name: 'John Doe',
        email: 'john@example.com',
        bio: 'Software developer and tech enthusiast',
        avatar: `https://api.dicebear.com/6.x/initials/svg?seed=JohnDoe`,
      });

      setPosts([
        { id: 1, author: 'John Doe', content: 'Hello from my profile!', likes: 5, comments: 2 },
        { id: 2, author: 'John Doe', content: 'Check out my latest project', likes: 10, comments: 3 },
      ]);
    }
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-8 px-4">
      <Card>
        <CardHeader>
          <div className="flex items-center space-x-4">
            <Avatar className="w-24 h-24">
              <AvatarImage src={user.avatar} />
              <AvatarFallback>{user.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-2xl">{user.name}</CardTitle>
              <p className="text-gray-500">{user.email}</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="mb-4">{user.bio}</p>
          <Button>Edit Profile</Button>
        </CardContent>
      </Card>

      <h2 className="text-2xl font-bold mt-8 mb-4">Posts</h2>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}