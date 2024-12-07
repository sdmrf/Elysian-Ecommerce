import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const RegisterStep3: React.FC<{ onSubmit: (data: { name: string; email: string; password: string }) => void }> = ({
  onSubmit,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError(""); 
    onSubmit({ name, email, password });
  };

  return (
    <div className="w-full max-w-md mx-auto p-8 bg-card shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-foreground">Complete Your Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <Label htmlFor="name" className="text-muted-foreground">Full Name</Label>
          <Input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your full name"
            required
            className="mt-2"
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="email" className="text-muted-foreground">Email</Label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="mt-2"
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="password" className="text-muted-foreground">Password</Label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
            className="mt-2"
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="confirm-password" className="text-muted-foreground">Confirm Password</Label>
          <Input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Re-enter your password"
            required
            className="mt-2"
          />
          {error && <p className="text-destructive text-sm mt-1">{error}</p>}
        </div>
        <p className="text-sm text-secondary-foreground mb-4">
          By clicking "Complete Registration" you agree to our Terms and Conditions.
        </p>
        <Button type="submit" className="w-full mt-4" variant="cartoon">
          Complete Registration
        </Button>
      </form>
    </div>
  );
};

export default RegisterStep3;
