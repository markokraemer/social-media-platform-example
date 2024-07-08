import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export default function Settings() {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    privateProfile: false,
    darkMode: false,
  });

  const { toast } = useToast();

  const handleSettingChange = (setting) => {
    setSettings((prev) => ({ ...prev, [setting]: !prev[setting] }));
  };

  const handleSaveSettings = () => {
    // Here you would typically save the settings to a backend
    console.log('Saving settings:', settings);
    toast({
      title: "Settings saved",
      description: "Your settings have been successfully updated.",
    });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Settings</h1>
      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="email-notifications">Email Notifications</Label>
            <Switch
              id="email-notifications"
              checked={settings.emailNotifications}
              onCheckedChange={() => handleSettingChange('emailNotifications')}
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="push-notifications">Push Notifications</Label>
            <Switch
              id="push-notifications"
              checked={settings.pushNotifications}
              onCheckedChange={() => handleSettingChange('pushNotifications')}
            />
          </div>
        </CardContent>
      </Card>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Privacy</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="private-profile">Private Profile</Label>
            <Switch
              id="private-profile"
              checked={settings.privateProfile}
              onCheckedChange={() => handleSettingChange('privateProfile')}
            />
          </div>
        </CardContent>
      </Card>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Appearance</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="dark-mode">Dark Mode</Label>
            <Switch
              id="dark-mode"
              checked={settings.darkMode}
              onCheckedChange={() => handleSettingChange('darkMode')}
            />
          </div>
        </CardContent>
      </Card>

      <Button className="mt-8 w-full" onClick={handleSaveSettings}>Save Settings</Button>
    </div>
  );
}