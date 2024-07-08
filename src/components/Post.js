import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThumbsUp, MessageCircle, Share2, Send } from 'lucide-react';

export const Post = ({ post }) => {
  const [isCommenting, setIsCommenting] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState(post.comments || []);
  const [likes, setLikes] = useState(post.likes);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

  const handleComment = () => {
    if (comment.trim()) {
      const newComment = {
        id: comments.length + 1,
        author: 'Current User',
        content: comment,
        timestamp: new Date().toISOString(),
      };
      setComments([...comments, newComment]);
      setComment('');
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
          <Button variant="ghost" size="sm" onClick={handleLike} className={isLiked ? 'text-blue-500' : ''}>
            <ThumbsUp className="w-4 h-4 mr-2" />
            Like ({likes})
          </Button>
          <Button variant="ghost" size="sm" onClick={() => setIsCommenting(!isCommenting)}>
            <MessageCircle className="w-4 h-4 mr-2" />
            Comment ({comments.length})
          </Button>
          <Button variant="ghost" size="sm">
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </Button>
        </div>
        {comments.map((comment) => (
          <div key={comment.id} className="flex items-start mb-4">
            <Avatar className="mr-4 mt-1">
              <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${comment.author}`} />
              <AvatarFallback>{comment.author[0]}</AvatarFallback>
            </Avatar>
            <div className="bg-gray-100 rounded-lg p-3 flex-grow">
              <p className="font-semibold">{comment.author}</p>
              <p>{comment.content}</p>
            </div>
          </div>
        ))}
        <div className="flex items-center mt-4">
          <Avatar className="mr-4">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CU</AvatarFallback>
          </Avatar>
          <Input
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write a comment..."
            className="flex-grow mr-2"
          />
          <Button onClick={handleComment} size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};