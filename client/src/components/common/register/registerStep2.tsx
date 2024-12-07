import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import OtpInput from "../otpInput";

const RegisterStep2: React.FC<{
  phoneNumber: string;
  onVerified: () => void;
}> = ({ phoneNumber, onVerified }) => {
  const [otpValue, setOtpValue] = useState<string>("");
  const [error, setError] = useState("");

  const handleVerify = () => {
    if (otpValue.length < 6) {
      setError("Please enter a complete OTP.");
      return;
    }
    setError("");
    onVerified();
  };

  return (
    <div className="w-full max-w-md mx-auto p-8 bg-card shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-foreground">
        Verify Mobile Number
      </h2>
      <p className="mb-4 text-sm text-secondary-foreground">
        We sent an OTP to <strong>{phoneNumber}</strong>. Please enter it below.
      </p>
      <form>
        <div className="mb-4">
          <Label htmlFor="otp" className="text-muted-foreground mb-2">
            OTP
          </Label>
          <div className="flex justify-center mb-4">
            <OtpInput otpValue={otpValue} setOtpValue={setOtpValue} />
          </div>

          {error && (
            <p className="text-destructive text-sm mt-2">{error}</p>
          )}
        </div>
        <Button
          onClick={handleVerify}
          className="w-full mt-4"
          variant="cartoon"
        >
          Verify OTP
        </Button>
      </form>
    </div>
  );
};

export default RegisterStep2;
