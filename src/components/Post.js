import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThumbsUp, MessageCircle, Share2 } from 'lucide-react';

export const Post = ({ post }) => {
  const [isCommenting, setIsCommenting] = useState(false);
  const [comment, setComment] = useState('');

  const handleLike = () => {
    // TODO: Implement like functionality
    console.log('Like post:', post.id);
  };

  const handleComment = () => {
    if (comment.trim()) {
      // TODO: Implement comment submission
      console.log('New comment on post', post.id, ':', comment);
      setComment('');
      setIsCommenting(false);
    }
  };

  return (
    <Card className="mb-6">
      <CardHeader>
        <div className="flex items-center">
          <Avatar className="mr-4">
            <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${post.author}`} />
            <AvatarFallback>{post.author[0]}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-lg">{post.author}</CardTitle>
            <p className="text-sm text-gray-500">2 hours ago</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{post.content}</p>
        <div className="flex items-center justify-between border-t border-b py-2 mb-4">
          <Button variant="ghost" size="sm" onClick={handleLike}>
            <ThumbsUp className="w-4 h-4 mr-2" />
            Like ({post.likes})
          </Button>
          <Button variant="ghost" size="sm" onClick={() => setIsCommenting(!isCommenting)}>
            <MessageCircle className="w-4 h-4 mr-2" />
            Comment ({post.comments})
          </Button>
          <Button variant="ghost" size="sm">
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </Button>
        </div>
        {isCommenting && (
          <div className="flex items-center">
            <Input
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write a comment..."
              className="flex-grow mr-2"
            />
            <Button onClick={handleComment}>Post</Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};