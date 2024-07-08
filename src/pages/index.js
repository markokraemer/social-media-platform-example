import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Post } from "@/components/Post";
import { ImageUpload } from "@/components/ImageUpload";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { PostSkeleton } from "@/components/PostSkeleton";
import { useToast } from "@/components/ui/use-toast";
import InfiniteScroll from 'react-infinite-scroll-component';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');
  const [newPostImage, setNewPostImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const { toast } = useToast();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const newPosts = [
      { id: posts.length + 1, author: 'John Doe', content: 'Just launched my new startup! Excited for this journey. #entrepreneurlife', likes: 15, comments: [] },
      { id: posts.length + 2, author: 'Jane Smith', content: 'Beautiful day for a hike! 🏞️ #naturelovers', likes: 22, comments: [] },
      { id: posts.length + 3, author: 'Mike Johnson', content: 'Anyone else binge-watching the new series on Netflix? No spoilers please! 📺', likes: 8, comments: [] },
    ];
    
    setPosts(prevPosts => [...prevPosts, ...newPosts]);
    setPage(prevPage => prevPage + 1);
    setHasMore(page < 5); // Simulate end of posts after 5 pages
  };

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

      <InfiniteScroll
        dataLength={posts.length}
        next={fetchPosts}
        hasMore={hasMore}
        loader={<PostSkeleton />}
        endMessage={
          <p className="text-center mt-4">No more posts to load.</p>
        }
      >
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </InfiniteScroll>
    </div>
  );
}