import React from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

interface IOTPData {
  otpValue: string;
  setOtpValue: (value: string) => void; 
}

const OtpInput: React.FC<IOTPData> = ({ otpValue, setOtpValue }) => {
  const handleOTPChange = (value: string) => {
    setOtpValue(value);
  };

  return (
    <InputOTP
      maxLength={6}
      value={otpValue}
      onChange={handleOTPChange} 
    >
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  );
};

export default OtpInput;
