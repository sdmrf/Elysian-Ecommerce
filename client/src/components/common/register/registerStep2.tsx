import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import OtpInput from "../otpInput";

const RegisterStep2: React.FC<{ onNext: (values: { otp: string }) => void }> = ({ onNext }) => {
  const validationSchema = Yup.object({
    otp: Yup.string()
      .required("OTP is required")
      .matches(/^\d{6}$/, "OTP must be 6 digits"),
  });

  const formik = useFormik({
    initialValues: { otp: "" },
    validationSchema,
    onSubmit: (values) => {
      onNext(values);
    },
  });

  return (
    <div className="p-8 bg-card shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Verify Mobile Number</h2>
      <p className="mb-4 text-sm">
        Please enter the OTP sent to your phone.
      </p>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <Label htmlFor="otp">OTP</Label>
          <div className="flex justify-center items-center">
          <OtpInput
            otpValue={formik.values.otp}
            setOtpValue={(value) => formik.setFieldValue("otp", value)}
          />
          </div>
          {formik.touched.otp && formik.errors.otp && (
            <p className="text-destructive text-sm">{formik.errors.otp}</p>
          )}
        </div>
        <Button type="submit" className="w-full mt-4" variant="cartoon">
          Verify OTP
        </Button>
      </form>
    </div>
  );
};

export default RegisterStep2;
