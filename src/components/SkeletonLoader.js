import { Card, CardHeader, CardContent } from "@/components/ui/card";

export const PostSkeleton = () => (
  <Card className="mb-6 animate-pulse">
    <CardHeader>
      <div className="flex items-center">
        <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
        <div>
          <div className="h-4 bg-gray-300 rounded w-24"></div>
          <div className="h-3 bg-gray-300 rounded w-16 mt-2"></div>
        </div>
      </div>
    </CardHeader>
    <CardContent>
      <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-5/6 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-4/6"></div>
      <div className="h-48 bg-gray-300 rounded w-full mt-4"></div>
    </CardContent>
  </Card>
);

export const CommentSkeleton = () => (
  <div className="flex items-start mb-4 animate-pulse">
    <div className="w-10 h-10 bg-gray-300 rounded-full mr-4"></div>
    <div className="flex-grow">
      <div className="h-4 bg-gray-300 rounded w-24 mb-2"></div>
      <div className="h-3 bg-gray-300 rounded w-full"></div>
    </div>
  </div>
);

export const ProfileSkeleton = () => (
  <Card className="animate-pulse">
    <CardHeader>
      <div className="flex items-center">
        <div className="w-24 h-24 bg-gray-300 rounded-full mr-4"></div>
        <div>
          <div className="h-6 bg-gray-300 rounded w-48 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-32"></div>
        </div>
      </div>
    </CardHeader>
    <CardContent>
      <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-5/6 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-4/6"></div>
    </CardContent>
  </Card>
);