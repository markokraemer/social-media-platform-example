import { Card, CardHeader, CardContent } from "@/components/ui/card";

export const PostSkeleton = () => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <div className="flex items-center">
          <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
          <div>
            <div className="h-4 bg-gray-200 rounded w-24"></div>
            <div className="h-3 bg-gray-200 rounded w-16 mt-2"></div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-4/6"></div>
        <div className="h-48 bg-gray-200 rounded w-full mt-4"></div>
        <div className="flex justify-between mt-4">
          <div className="h-8 bg-gray-200 rounded w-20"></div>
          <div className="h-8 bg-gray-200 rounded w-20"></div>
          <div className="h-8 bg-gray-200 rounded w-20"></div>
        </div>
      </CardContent>
    </Card>
  );
};