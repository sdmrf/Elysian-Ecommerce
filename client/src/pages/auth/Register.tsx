import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { toast } from "sonner";
import RegisterStep1 from "@/components/common/register/registerStep1";
import RegisterStep2 from "@/components/common/register/registerStep2";
import RegisterStep3 from "@/components/common/register/registerStep3";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const step1Schema = Yup.object({
  phoneNumber: Yup.string()
    .matches(/^\d{10}$/, "Please enter a valid 10-digit phone number.")
    .required("Phone number is required"),
});

const step2Schema = Yup.object({
  otp: Yup.string().length(6, "OTP must be 6 digits").required("OTP is required"),
});

const step3Schema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});

const Register: React.FC = () => {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userData, setUserData] = useState<{ name: string; email: string; password: string } | null>(null);

  const handleNextStep1 = (phone: string) => {
    setPhoneNumber(phone);
    setStep(2);
  };

  const handleNextStep2 = () => {
    setStep(3);
  };

  const handleCompleteRegistration = (data: { name: string; email: string; password: string }) => {
    setUserData(data);
    console.log("Final User Data:", { phoneNumber, ...data });
    toast.success("Registration successful!", { richColors: true });
  };

  return (
    <div className="container mx-auto py-8">
      <div className="w-full max-w-md mx-auto">
        {step === 1 && (
          <FormProvider {...useForm({ resolver: yupResolver(step1Schema) })}>
            <RegisterStep1 onNext={handleNextStep1} />
          </FormProvider>
        )}
        {step === 2 && (
          <FormProvider {...useForm({ resolver: yupResolver(step2Schema) })}>
            <RegisterStep2 phoneNumber={phoneNumber} onVerified={handleNextStep2} />
          </FormProvider>
        )}
        {step === 3 && (
          <FormProvider {...useForm({ resolver: yupResolver(step3Schema) })}>
            <RegisterStep3 onSubmit={handleCompleteRegistration} />
          </FormProvider>
        )}
      </div>
    </div>
  );
};

export default Register;
