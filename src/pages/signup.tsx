// src/pages/Signup.tsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { Leaf } from "lucide-react";

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password !== form.confirm) {
      alert("Passwords do not match!");
      return;
    }
    alert("Account created successfully!");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-green-50">
      <Card className="w-[340px] bg-white/90 shadow-xl rounded-xl">
        <CardContent className="p-6 space-y-4">
          <div className="text-center">
            <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center mx-auto">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-lg font-semibold">Welcome Back</h2>
            <p className="text-sm text-gray-500">
              Your AI assistant for healthier crops
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <Input
              name="name"
              placeholder="Enter your full name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <Input
              name="email"
              type="email"
              placeholder="Enter your email address"
              value={form.email}
              onChange={handleChange}
              required
            />
            <Input
              name="password"
              type="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
              required
            />
            <Input
              name="confirm"
              type="password"
              placeholder="Confirm your password"
              value={form.confirm}
              onChange={handleChange}
              required
            />

            <Button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white"
            >
              Create Account
            </Button>
          </form>

          <div className="relative flex items-center justify-center">
            <span className="text-xs text-gray-400 bg-white px-2">
              Or sign up with
            </span>
          </div>

          <Button
            type="button"
            variant="outline"
            className="w-full flex items-center justify-center gap-2"
          >
            <FcGoogle size={18} />
            Sign up with Google
          </Button>

          <div className="text-center text-sm">
            <p className="text-gray-500">
              Already have an account?{" "}
              <Link to="/login" className="text-green-600 font-medium">
                Log in
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
