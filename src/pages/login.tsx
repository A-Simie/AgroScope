// src/pages/Login.tsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";
import cornfield from "@/assets/cornfield.jpeg";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "testing@gmail.com" && password === "Testing123@") {
      navigate("/dashboard");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${cornfield})`,
      }}
    >
      <Card className="w-[340px] backdrop-blur-sm bg-white/90 shadow-xl rounded-xl">
        <CardContent className="p-6 space-y-4">
          <div className="text-center">
            <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center mx-auto">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-lg font-semibold">Welcome Back</h2>
            <p className="text-sm text-gray-500">
              Log in to your AgroScope account
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <Input
                type="email"
                placeholder="Enter your email or username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <Input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}

            <Button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white"
            >
              Log In
            </Button>
          </form>

          <div className="text-center text-sm">
            <p className="text-gray-500">
              Don&apos;t have an account?{" "}
              <Link to="/signup" className="text-green-600 font-medium">
                Sign Up
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
