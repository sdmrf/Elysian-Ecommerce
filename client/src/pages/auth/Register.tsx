import React, { useState } from "react";
import RegisterStep1 from "@/components/common/register/registerStep1";
import RegisterStep2 from "@/components/common/register/registerStep2";
import RegisterStep3 from "@/components/common/register/registerStep3";
import { toast } from "sonner";
import { CompleteRegisterFormValues } from "@/types";

const Register: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formValues, setFormValues] = useState<CompleteRegisterFormValues>({
    phoneNumber: "",
    otp: "",
    name: "",
    email: "",
    password: "",
  });

  const handleNext = (newValues: any) => {
    setFormValues({ ...formValues, ...newValues });
    setStep(step + 1);
  };

  const handleComplete = (newValues: any) => {
    const finalValues = { ...formValues, ...newValues };
    console.log("Final Registration Data:", finalValues);
    toast.success("Registration successful!", { richColors: true });
  };

  return (
    <div className="container mx-auto py-8">
      <div className="w-full max-w-md mx-auto">
        {step === 1 && <RegisterStep1 onNext={handleNext} />}
        {step === 2 && <RegisterStep2 onNext={handleNext} />}
        {step === 3 && <RegisterStep3 onComplete={handleComplete} />}
      </div>
      <p className="text-center mt-4">
        Already have an account?{" "}
        <a href="/login" className="text-primary">
          Login
        </a>
      </p>
    </div>
  );
};

export default Register;
