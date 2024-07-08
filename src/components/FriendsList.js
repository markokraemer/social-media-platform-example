import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

export const FriendsList = ({ friends }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Friends</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {friends.map((friend) => (
            <div key={friend.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${friend.name}`} />
                  <AvatarFallback>{friend.name[0]}</AvatarFallback>
                </Avatar>
                <Link href={`/profile/${friend.id}`} className="font-medium hover:underline">
                  {friend.name}
                </Link>
              </div>
              <Button variant="outline" size="sm">Unfriend</Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export const FriendRequests = ({ requests }) => {
  const [pendingRequests, setPendingRequests] = useState(requests);

  const handleAccept = (id) => {
    setPendingRequests(pendingRequests.filter(request => request.id !== id));
    // TODO: Implement actual friend acceptance logic
  };

  const handleReject = (id) => {
    setPendingRequests(pendingRequests.filter(request => request.id !== id));
    // TODO: Implement actual friend rejection logic
  };

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Friend Requests</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {pendingRequests.map((request) => (
            <div key={request.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${request.name}`} />
                  <AvatarFallback>{request.name[0]}</AvatarFallback>
                </Avatar>
                <span className="font-medium">{request.name}</span>
              </div>
              <div className="space-x-2">
                <Button size="sm" onClick={() => handleAccept(request.id)}>Accept</Button>
                <Button variant="outline" size="sm" onClick={() => handleReject(request.id)}>Reject</Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};