import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Post } from "@/components/Post";
import { ImageUpload } from "@/components/ImageUpload";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { useToast } from "@/components/ui/use-toast";

export default function Home() {
  const [posts, setPosts] = useState([
    { id: 1, author: 'John Doe', content: 'Just launched my new startup! Excited for this journey. #entrepreneurlife', likes: 15, comments: [] },
    { id: 2, author: 'Jane Smith', content: 'Beautiful day for a hike! 🏞️ #naturelovers', likes: 22, comments: [] },
    { id: 3, author: 'Mike Johnson', content: 'Anyone else binge-watching the new series on Netflix? No spoilers please! 📺', likes: 8, comments: [] },
  ]);

  const [newPost, setNewPost] = useState('');
  const [newPostImage, setNewPostImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handlePostSubmit = async () => {
    if (newPost.trim() || newPostImage) {
      setIsSubmitting(true);
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const post = {
          id: posts.length + 1,
          author: 'Current User',
          content: newPost,
          image: newPostImage,
          likes: 0,
          comments: [],
        };
        setPosts([post, ...posts]);
        setNewPost('');
        setNewPostImage(null);
        toast({
          title: "Post created",
          description: "Your post has been successfully created.",
        });
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to create post. Please try again.",
          variant: "destructive",
        });
      } finally {
        setIsSubmitting(false);
      }
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
          <ImageUpload onImageUpload={setNewPostImage} />
          <Button onClick={handlePostSubmit} className="mt-4" disabled={isSubmitting}>
            {isSubmitting ? <LoadingSpinner /> : 'Post'}
          </Button>
        </CardContent>
      </Card>

      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}