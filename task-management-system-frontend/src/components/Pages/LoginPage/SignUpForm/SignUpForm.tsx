import { Button } from "@/components/ui/button";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateUserRequest } from "@/components/types";
import { accountService } from "@/api/api";
import { create } from "domain";
import { useState } from "react";
import { error } from "console";

interface Props {
  setSignUpActive: (e: boolean) => void;
}

const SignUpForm = ({ setSignUpActive }: Props) => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [successCreate, setSuccessCreate] = useState<boolean | null>(null);

  const formSchema = z
    .object({
      name: z.string().min(1, {
        message: "What should we call you?",
      }),
      username: z
        .string()
        .min(1, { message: "Email is required." })
        .email({ message: "Invalid email address." }),
      password: z.string().min(4, {
        message: "Password must be at least 4 characters.",
      }),
      confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords don't match.",
      path: ["confirmPassword"],
    });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      console.log(values);
      setIsSubmitting(true);

      const createUserRequest: CreateUserRequest = {
        name: values.name,
        username: values.username,
        password: values.password,
      };

      const existingUser = await accountService.existingUser(createUserRequest.username);
      if (existingUser) {
        setSuccessCreate(false);
        setErrorMessage("Email already taken");
        return;
      }

      await accountService.register(createUserRequest);
      console.log(createUserRequest);
      setSuccessCreate(true);
    } catch (error) {
      setErrorMessage("Error creating account");
      setSuccessCreate(false);
      console.error("Create account error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Card className="p-8 h-[575px] flex-1/2 rounded-r-2xl rounded-l-none">
        <CardTitle className="text-center text-xl font-bold">Create Account</CardTitle>
        <CardDescription className="text-center -mt-5 mb-3 text-xs">
          Get started - it's free.
        </CardDescription>
        <div
          className={`flex justify-center text-xs p-0 -mt-5 -mb-3 h-6 min-h-[10px] ${
            successCreate === true
              ? "text-green-800"
              : successCreate === false
              ? "text-destructive"
              : ""
          }`}
        >
          {successCreate === true ? "Account Created" : successCreate === false ? errorMessage : ""}
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <FormLabel className="text-sm font-medium whitespace-nowrap">Name</FormLabel>
                  <div className="text-xs text-destructive">
                    {form.formState.errors?.name?.message}
                  </div>
                </div>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Name" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <FormLabel className="text-sm font-medium whitespace-nowrap">Email</FormLabel>
                  <div className="text-xs text-destructive">
                    {form.formState.errors?.username?.message}
                  </div>
                </div>
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Email" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <FormLabel className="text-sm font-medium whitespace-nowrap">Password</FormLabel>
                  <div className="text-xs text-destructive">
                    {form.formState.errors?.password?.message}
                  </div>
                </div>
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input type="password" placeholder="Password" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <FormLabel className="text-sm font-medium whitespace-nowrap">
                    Confirm Password
                  </FormLabel>
                  <div className="text-xs text-destructive">
                    {form.formState.errors?.confirmPassword?.message}
                  </div>
                </div>
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input type="password" placeholder="Confirm Password" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-black hover:bg-neutral-800 whitespace-nowrap mt-3"
            >
              {isSubmitting ? "Signing Up" : "Sign Up"}
            </Button>

            <div className="text-center pb-2">
              <button
                type="button"
                className="text-sm font-normal text-muted-foreground hover:underline cursor-pointer whitespace-nowrap"
                onClick={(e) => {
                  e.preventDefault();
                  setSignUpActive(false);
                }}
              >
                Already got an account? Sign in
              </button>
            </div>
          </form>
        </Form>
      </Card>
    </>
  );
};

export default SignUpForm;
