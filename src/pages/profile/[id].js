import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Post } from "@/components/Post";
import { FriendsList } from "@/components/FriendsList";
import { Camera } from 'lucide-react';

export default function Profile() {
  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    if (id) {
      // TODO: Fetch user data and posts from API
      setUser({
        id: id,
        name: 'John Doe',
        email: 'john@example.com',
        bio: 'Software developer and tech enthusiast',
        avatar: `https://api.dicebear.com/6.x/initials/svg?seed=JohnDoe`,
        coverPhoto: '/api/placeholder/1200/300',
      });

      setPosts([
        { id: 1, author: 'John Doe', content: 'Hello from my profile!', likes: 5, comments: 2 },
        { id: 2, author: 'John Doe', content: 'Check out my latest project', likes: 10, comments: 3 },
      ]);

      setFriends([
        { id: 2, name: 'Jane Smith' },
        { id: 3, name: 'Mike Johnson' },
        { id: 4, name: 'Emily Brown' },
      ]);
    }
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-8 px-4">
      <div className="relative mb-8">
        <img src={user.coverPhoto} alt="Cover" className="w-full h-64 object-cover rounded-lg" />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
          <Avatar className="w-32 h-32 border-4 border-white">
            <AvatarImage src={user.avatar} />
            <AvatarFallback>{user.name[0]}</AvatarFallback>
          </Avatar>
        </div>
      </div>

      <div className="text-center mt-16 mb-8">
        <h1 className="text-3xl font-bold">{user.name}</h1>
        <p className="text-gray-500 mt-2">{user.email}</p>
        <p className="mt-4">{user.bio}</p>
        <Button className="mt-4">
          <Camera className="w-4 h-4 mr-2" />
          Change Profile Picture
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Posts</CardTitle>
            </CardHeader>
            <CardContent>
              {posts.map((post) => (
                <Post key={post.id} post={post} />
              ))}
            </CardContent>
          </Card>
        </div>
        <div>
          <FriendsList friends={friends} />
        </div>
      </div>
    </div>
  );
}