import React, { useState } from "react";
import { Input } from "@/components/ui/input"; 
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const RegisterStep1: React.FC<{ onNext: (phoneNumber: string) => void }> = ({ onNext }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");

  const handleNext = () => {
    if (!phoneNumber || !/^\d{10}$/.test(phoneNumber)) {
      setError("Please enter a valid phone number.");
      return;
    }
    setError("");
    onNext(phoneNumber);
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (/^\d{0,10}$/.test(value)) {
      setPhoneNumber(value);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-8 bg-card shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-foreground">Register with Mobile</h2>
      <form>
        <div className="mb-4">
          <Label htmlFor="phone" className="text-muted-foreground">Phone Number</Label>
          <Input
            type="tel"
            id="phone"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            placeholder="Enter your phone number"
            className="mt-2"
            required
          />
          {error && <p className="text-destructive text-sm mt-1">{error}</p>}
        </div>
        <Button onClick={handleNext} className="w-full mt-4" variant="cartoon">
          Send OTP
        </Button>
      </form>
    </div>
  );
};

export default RegisterStep1;
