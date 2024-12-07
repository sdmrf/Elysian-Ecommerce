import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
}).required();

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: { email: string; password: string }) => {
    if (data.email === "user@example.com" && data.password === "password123") {
      toast.success("Login successful!", {
        richColors: true,
      });
    } else {
      toast.error("Invalid credentials", {
        richColors: true,
      });
    }
  };

  return (
    <div className="container mx-auto py-8">
      <div className="w-full max-w-md mx-auto p-8 bg-card shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-foreground">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <Label htmlFor="email" className="text-muted-foreground">
              Email
            </Label>
            <Input
              type="email"
              id="email"
              {...register("email")}
              placeholder="Enter your email"
              className="mt-2"
            />
            {errors.email && (
              <p className="text-destructive text-sm mt-2">{errors.email.message}</p>
            )}
          </div>
          <div className="mb-4">
            <Label htmlFor="password" className="text-muted-foreground">
              Password
            </Label>
            <Input
              type="password"
              id="password"
              {...register("password")}
              placeholder="Enter your password"
              className="mt-2"
            />
            {errors.password && (
              <p className="text-destructive text-sm mt-2">{errors.password.message}</p>
            )}
          </div>
          <Button type="submit" className="w-full mt-4" variant="cartoon">
            Login
          </Button>
        </form>
        <div className="text-center mt-4">
          <p className="text-secondary-foreground">
            Don't have an account?{" "}
            <a href="/register" className="text-primary">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
