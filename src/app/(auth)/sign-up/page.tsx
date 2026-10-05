"use client";

import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import React from "react";

const SignUp = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {};
    // Convert FormData to plain object
    formData.forEach((value, key) => {
      data[key] = value.toString();

    });
    alert("Form submitted successfully!");
    console.log("Form Data:", data);
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-linear-to-br from-indigo-50 via-white to-purple-50 p-4 dark:from-zinc-950 dark:via-zinc-900 dark:to-indigo-950">
      <div className="animate-float pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-indigo-400/30 blur-3xl" />
      <div className="animate-float-slow pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-purple-400/30 blur-3xl" />
      <div className="animate-float pointer-events-none absolute left-1/2 top-1/3 h-56 w-56 -translate-x-1/2 rounded-full bg-sky-300/20 blur-3xl" />

      <div className="animate-fade-up relative w-full max-w-md rounded-3xl border border-white/60 bg-white/70 p-8 shadow-2xl shadow-indigo-500/20 backdrop-blur-2xl transition-shadow duration-500 hover:shadow-indigo-500/30 dark:border-white/10 dark:bg-zinc-900/70 sm:p-10">
        <div className="mb-8 text-center">
          <div className="animate-pop-in mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-indigo-500 to-purple-600 text-2xl font-bold text-white shadow-lg shadow-indigo-500/40 transition-transform duration-300 hover:rotate-6 hover:scale-110">
            A
          </div>
          <h1 className="text-shimmer text-3xl font-extrabold tracking-tight">
            Create your account
          </h1>
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
            Sign up to get started in less than a minute.
          </p>
        </div>

      <Form className="w-full" onSubmit={onSubmit}>
        <Fieldset className="w-full">
          <FieldGroup className="stagger flex flex-col gap-5">
            <TextField
              isRequired
              name="name"
              validate={(value) => {
                if (value.length < 3) {
                  return "Name must be at least 3 characters";
                }
                return null;
              }}
            >
              <Label>Name</Label>
              <Input placeholder="John Doe" />
              <FieldError />
            </TextField>
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
                if (!/[A-Z]/.test(value)) {
                  return "Password must contain at least one uppercase letter";
                }
                if (!/[0-9]/.test(value)) {
                  return "Password must contain at least one number";
                }
                return null;
              }}
            >
              <Label>Password</Label>
              <Input placeholder="Enter your password" />
              <Description>
                Must be at least 8 characters with 1 uppercase and 1 number
              </Description>
              <FieldError />
            </TextField>
          </FieldGroup>
          <Fieldset.Actions className="stagger mt-6 flex flex-col gap-3">
            <Button
              type="submit"
              className="w-full bg-linear-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-500/40 active:translate-y-0 active:scale-[0.98]"
            >
              Create account
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

        <p className="animate-fade-up mt-6 text-center [animation-delay:0.9s] text-xs text-zinc-500 dark:text-zinc-400">
          By signing up, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default SignUp;
