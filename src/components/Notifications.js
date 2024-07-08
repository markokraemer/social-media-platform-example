import { useState } from 'react';
import { Bell } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";

export const Notifications = ({ initialNotifications }) => {
  const [notifications, setNotifications] = useState(initialNotifications);

  const markAsRead = (id) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
              {unreadCount}
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80">
        <ScrollArea className="h-[300px]">
          {notifications.length === 0 ? (
            <DropdownMenuItem>No notifications</DropdownMenuItem>
          ) : (
            notifications.map((notification) => (
              <DropdownMenuItem key={notification.id} className="flex items-center p-4" onSelect={() => markAsRead(notification.id)}>
                <div className={`flex-1 ${notification.read ? 'text-gray-500' : 'font-semibold'}`}>
                  {notification.content}
                </div>
                {!notification.read && (
                  <div className="w-2 h-2 bg-blue-500 rounded-full ml-2"></div>
                )}
              </DropdownMenuItem>
            ))
          )}
        </ScrollArea>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};