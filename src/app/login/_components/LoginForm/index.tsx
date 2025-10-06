"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(10, "Password must be at least 10 characters"),
});

type tLoginSchema = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<tLoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: tLoginSchema) => {
    const result = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    console.log(result, "Hey I am the result");

    if (result?.error) {
      toast.error("Login failed: " + result.error);
    } else if (result?.ok) {
      toast.success("Login successful!");
      router.push("/dashboard");
    }
  };

  return (
    <div className="flex flex-col gap-4 justify-center w-4/5 h-4/5 rounded-4xl bg-light-primary dark:bg-dark-primary text-light-secondary dark:text-dark-secondary">
      <div className="flex flex-col gap-1 w-full items-center">
        <h1 className="text-2xl font-bold">Welcome Back</h1>
        <span className="text-xl font-light">
          Sign in to your account to continue
        </span>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-full px-5"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-xl">
            Email
          </label>
          <input
            {...register("email")}
            placeholder="Enter Your Email"
            className="p-3 border-2 border-solid rounded-full border-light-secondary dark:border-dark-secondary focus:outline-none"
            type="email"
            id="email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input
            {...register("password")}
            placeholder="Enter Your Password"
            type="password"
            className="p-3 border-2 border-solid rounded-full border-light-secondary dark:border-dark-secondary focus:outline-none"
            id="password"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>
        <button
          disabled={isSubmitting}
          type="submit"
          className="bg-light-secondary dark:bg-dark-secondary text-light-primary dark:text-dark-primary p-4 cursor-pointer rounded-full text-xl font-bold disabled:opacity-50"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
