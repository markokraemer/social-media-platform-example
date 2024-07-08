import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Image as ImageIcon } from 'lucide-react';

export const ImageUpload = ({ onImageUpload }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
        onImageUpload(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="mt-4">
      <Label htmlFor="image-upload" className="cursor-pointer">
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-blue-500 transition-colors">
          {selectedImage ? (
            <img src={selectedImage} alt="Selected" className="max-h-48 mx-auto" />
          ) : (
            <div>
              <ImageIcon className="w-12 h-12 mx-auto text-gray-400" />
              <p className="mt-2 text-sm text-gray-600">Click to upload an image</p>
            </div>
          )}
        </div>
      </Label>
      <Input
        id="image-upload"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleImageChange}
      />
      {selectedImage && (
        <Button variant="outline" className="mt-2" onClick={() => setSelectedImage(null)}>
          Remove Image
        </Button>
      )}
    </div>
  );
};