import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lock, History } from "lucide-react";

export default function Profile() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12">
      <div className="w-full max-w-3xl px-4">
        <div className="mb-6 flex justify-between items-center">
          <h1 className="text-xl font-semibold">My Profile</h1>
          <nav className="space-x-4 text-sm text-gray-500">
            <a href="/dashboard" className="hover:text-green-600">
              Dashboard
            </a>
            <a href="/new-scan" className="hover:text-green-600">
              New Scan
            </a>
            <a href="/profile" className="font-semibold text-green-600">
              Profile
            </a>
          </nav>
        </div>

        <Card className="bg-white shadow-sm rounded-xl mb-6">
          <CardContent className="flex flex-col items-center py-8">
            <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-3xl text-gray-500">👤</span>
            </div>
            <h2 className="mt-3 text-lg font-medium">Alex Johnson</h2>
            <p className="text-sm text-gray-500">alex.j@farmstead.com</p>
            <Button variant="outline" className="mt-3">
              Edit Profile
            </Button>
          </CardContent>
        </Card>

        <div className="space-y-3">
          <Card className="bg-white rounded-xl shadow-sm">
            <CardContent className="flex justify-between items-center py-4 px-6">
              <div className="flex items-center gap-2">
                <Lock className="text-green-600 w-5 h-5" />
                <span className="font-medium">Change Password</span>
              </div>
              <Button
                variant="ghost"
                className="text-gray-500 hover:text-green-600"
              >
                →
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white rounded-xl shadow-sm">
            <CardContent className="flex justify-between items-center py-4 px-6">
              <div className="flex items-center gap-2">
                <History className="text-green-600 w-5 h-5" />
                <span className="font-medium">View My Scan History</span>
              </div>
              <Button
                variant="ghost"
                className="text-gray-500 hover:text-green-600"
              >
                →
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8">
          <Button
            variant="outline"
            onClick={handleLogout}
            className="text-red-500 border-red-300 hover:bg-red-50"
          >
            Log Out
          </Button>
        </div>
      </div>
    </div>
  );
}
