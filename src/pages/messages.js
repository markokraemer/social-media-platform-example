import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Messages() {
  const [conversations, setConversations] = useState([
    { id: 1, name: 'John Doe', lastMessage: 'Hey, how are you?', timestamp: '2 hours ago' },
    { id: 2, name: 'Jane Smith', lastMessage: 'Did you see the new movie?', timestamp: '1 day ago' },
    { id: 3, name: 'Mike Johnson', lastMessage: 'Let\'s meet up this weekend', timestamp: '3 days ago' },
  ]);

  const [selectedConversation, setSelectedConversation] = useState(null);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() && selectedConversation) {
      // In a real app, you would send this message to the server
      console.log(`Sending message to ${selectedConversation.name}: ${newMessage}`);
      setNewMessage('');
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Messages</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Conversations</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[500px]">
              {conversations.map((conversation) => (
                <div
                  key={conversation.id}
                  className={`flex items-center p-3 cursor-pointer hover:bg-gray-100 rounded-lg ${
                    selectedConversation?.id === conversation.id ? 'bg-gray-100' : ''
                  }`}
                  onClick={() => setSelectedConversation(conversation)}
                >
                  <Avatar className="mr-3">
                    <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${conversation.name}`} />
                    <AvatarFallback>{conversation.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{conversation.name}</h3>
                    <p className="text-sm text-gray-500">{conversation.lastMessage}</p>
                  </div>
                </div>
              ))}
            </ScrollArea>
          </CardContent>
        </Card>
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>{selectedConversation ? selectedConversation.name : 'Select a conversation'}</CardTitle>
          </CardHeader>
          <CardContent>
            {selectedConversation ? (
              <>
                <ScrollArea className="h-[400px] mb-4">
                  {/* Here you would map through and display messages */}
                  <p className="text-center text-gray-500">Message history would appear here</p>
                </ScrollArea>
                <div className="flex">
                  <Input
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-grow mr-2"
                  />
                  <Button onClick={handleSendMessage}>Send</Button>
                </div>
              </>
            ) : (
              <p className="text-center text-gray-500">Select a conversation to start messaging</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}