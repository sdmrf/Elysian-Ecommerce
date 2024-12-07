import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const RegisterStep3: React.FC<{
  onComplete: (values: { name: string; email: string; password: string }) => void;
}> = ({ onComplete }) => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm password is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: (values) => {
      const { confirmPassword, ...formValues } = values;
      onComplete(formValues);
    },
  });

  return (
    <div className="p-8 bg-card shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Complete Registration</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <Label htmlFor="name">Name</Label>
          <Input id="name" {...formik.getFieldProps("name")} placeholder="Enter your name" />
          {formik.touched.name && formik.errors.name && (
            <p className="text-destructive text-sm">{formik.errors.name}</p>
          )}
        </div>
        <div className="mb-4">
          <Label htmlFor="email">Email</Label>
          <Input id="email" {...formik.getFieldProps("email")} placeholder="Enter your email" />
          {formik.touched.email && formik.errors.email && (
            <p className="text-destructive text-sm">{formik.errors.email}</p>
          )}
        </div>
        <div className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            {...formik.getFieldProps("password")}
            placeholder="Enter your password"
          />
          {formik.touched.password && formik.errors.password && (
            <p className="text-destructive text-sm">{formik.errors.password}</p>
          )}
        </div>
        <div className="mb-4">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            id="confirmPassword"
            type="password"
            {...formik.getFieldProps("confirmPassword")}
            placeholder="Confirm your password"
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <p className="text-destructive text-sm">{formik.errors.confirmPassword}</p>
          )}
        </div>
        <p className="text-xs text-secondary-foreground">
          By clicking the button below, you agree to our Terms of Service and Privacy Policy.
        </p>
        <Button type="submit" className="w-full mt-4" variant="cartoon">
          Complete Registration
        </Button>
      </form>
      
    </div>
  );
};

export default RegisterStep3;
