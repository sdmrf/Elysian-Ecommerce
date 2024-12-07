import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const RegisterStep1: React.FC<{
  onNext: (values: { phoneNumber: string }) => void;
}> = ({ onNext }) => {
  const validationSchema = Yup.object({
    phoneNumber: Yup.string()
      .required("Phone number is required")
      .matches(/^\d{10}$/, "Phone number must be 10 digits"),
  });

  const formik = useFormik({
    initialValues: { phoneNumber: "" },
    validationSchema,
    onSubmit: (values) => {
      onNext(values);
    },
  });

  return (
    <div className="p-8 bg-card shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-8">Register with Mobile</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            className="mt-2"
            id="phone"
            type="tel"
            {...formik.getFieldProps("phoneNumber")}
            placeholder="Enter your phone number"
            maxLength={10}
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber && (
            <p className="text-destructive text-sm">
              {formik.errors.phoneNumber}
            </p>
          )}
        </div>
        <Button type="submit" className="w-full mt-4" variant="cartoon">
          Send OTP
        </Button>
      </form>
    </div>
  );
};

export default RegisterStep1;
