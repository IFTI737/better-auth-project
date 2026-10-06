"use client";

import {
  Button,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { signIn } from "@/lib/auth-client";

// Friendly messages keyed by Better Auth error codes
const errorMessages: Record<string, string> = {
  INVALID_EMAIL_OR_PASSWORD: "Incorrect email or password. Please try again.",
  INVALID_PASSWORD: "Incorrect password. Please try again.",
  INVALID_EMAIL: "That email address is not valid.",
  USER_NOT_FOUND: "No account found with this email.",
  EMAIL_NOT_VERIFIED: "Please verify your email before signing in.",
};

const SignIn = () => {
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {};
    // Convert FormData to plain object
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });
    const { data: signInData, error } = await signIn.email({
      email: data.email, // required, The email address of the user.
      password: data.password, // required, The password of the user.
      callbackURL: "/", // Relative path on this site, so it's always a trusted origin.
    });
    if (error) {
      toast.error(
        (error.code && errorMessages[error.code]) ||
          error.message ||
          "Something went wrong. Please try again.",
      );
      return;
    }
    toast.success("Signed in successfully!");
    console.log("Form Data:", signInData);
    router.push("/");
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-linear-to-br from-indigo-50 via-white to-purple-50 p-4 dark:from-zinc-950 dark:via-zinc-900 dark:to-indigo-950">
      <ToastContainer position="top-center" autoClose={4000} theme="colored" />
      <div className="animate-float pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-indigo-400/30 blur-3xl" />
      <div className="animate-float-slow pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-purple-400/30 blur-3xl" />
      <div className="animate-float pointer-events-none absolute left-1/2 top-1/3 h-56 w-56 -translate-x-1/2 rounded-full bg-sky-300/20 blur-3xl" />

      <div className="animate-fade-up relative w-full max-w-md rounded-3xl border border-white/60 bg-white/70 p-8 shadow-2xl shadow-indigo-500/20 backdrop-blur-2xl transition-shadow duration-500 hover:shadow-indigo-500/30 dark:border-white/10 dark:bg-zinc-900/70 sm:p-10">
        <div className="mb-8 text-center">
          <div className="animate-pop-in mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-indigo-500 to-purple-600 text-2xl font-bold text-white shadow-lg shadow-indigo-500/40 transition-transform duration-300 hover:rotate-6 hover:scale-110">
            A
          </div>
          <h1 className="text-shimmer text-3xl font-extrabold tracking-tight">
            Welcome back
          </h1>
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
            Sign in to continue to your account.
          </p>
        </div>

        <Form className="w-full" onSubmit={onSubmit}>
          <Fieldset className="w-full">
            <FieldGroup className="stagger flex flex-col gap-5">
              <TextField isRequired name="email" type="email">
                <Label>Email</Label>
                <Input placeholder="john@example.com" />
                <FieldError />
              </TextField>

              <TextField
                isRequired
                minLength={8}
                name="password"
                type="password"
                validate={(value) => {
                  if (value.length < 8) {
                    return "Password must be at least 8 characters";
                  }
                  return null;
                }}
              >
                <Label>Password</Label>
                <Input placeholder="Enter your password" />
                <FieldError />
              </TextField>
            </FieldGroup>
            <Fieldset.Actions className="stagger mt-6 flex flex-col gap-3">
              <Button
                type="submit"
                className="w-full bg-linear-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-500/40 active:translate-y-0 active:scale-[0.98]"
              >
                Sign in
              </Button>
              <Button
                type="reset"
                variant="secondary"
                className="w-full transition-all duration-300 active:scale-[0.98]"
              >
                Clear form
              </Button>
            </Fieldset.Actions>
          </Fieldset>
        </Form>

        <p className="animate-fade-up mt-6 text-center text-sm text-zinc-500 [animation-delay:0.9s] dark:text-zinc-400">
          Don&apos;t have an account?{" "}
          <Link
            href="/sign-up"
            className="font-semibold text-indigo-600 hover:underline dark:text-indigo-400"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
