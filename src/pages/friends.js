import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { FriendsList, FriendRequests } from "@/components/FriendsList";

export default function Friends() {
  const [friends, setFriends] = useState([
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Mike Johnson' },
  ]);

  const [friendRequests, setFriendRequests] = useState([
    { id: 4, name: 'Emily Brown' },
    { id: 5, name: 'Alex Wilson' },
  ]);

  const [searchQuery, setSearchQuery] = useState('');

  const filteredFriends = friends.filter(friend =>
    friend.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Friends</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Find Friends</CardTitle>
        </CardHeader>
        <CardContent>
          <Input
            type="text"
            placeholder="Search friends..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <FriendsList friends={filteredFriends} />
        </div>
        <div>
          <FriendRequests requests={friendRequests} />
        </div>
      </div>
    </div>
  );
}