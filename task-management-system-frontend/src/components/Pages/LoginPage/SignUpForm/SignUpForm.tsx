import { Button } from "@/components/ui/button";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@radix-ui/react-checkbox";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface Props {
  setSignUpActive: (e: boolean) => void;
}

const SignUpForm = ({ setSignUpActive }: Props) => {
  const formSchema = z.object({
    name: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    email: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    password: z.string().min(5, {
      message: "Password must be at least 5 characters.",
    }),
    confirmPassword: z.string().min(5, {
      message: "Password must be at least 5 characters.",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };
  return (
    <>
      <Card className="p-8 h-full rounded-none flex-1/2">
        <CardTitle className="text-center text-xl font-bold">Create Account</CardTitle>
        <CardDescription className="text-center -mt-5 mb-3 text-xs">
          Get started - it's free.
        </CardDescription>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <div>
                <FormLabel className="block text-sm font-medium mb-2 whitespace-nowrap">
                  Name
                </FormLabel>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div>
                <FormLabel className="block text-sm font-medium mb-2 whitespace-nowrap">
                  Email
                </FormLabel>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div>
                <FormLabel className="block text-sm font-medium mb-2 whitespace-nowrap">
                  Password
                </FormLabel>
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input type="password" placeholder="Password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div>
                <FormLabel className="block text-sm font-medium mb-2 whitespace-nowrap">
                  Confirm Password
                </FormLabel>
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input type="confirmPassword" placeholder="Confirm Password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-black hover:bg-neutral-800 whitespace-nowrap"
            >
              Sign up
            </Button>

            <div className="text-center pt-2">
              <a
                href="#"
                className="text-sm font-normal text-muted-foreground hover:underline cursor-pointer whitespace-nowrap"
                onClick={() => setSignUpActive(false)}
              >
                Already got an account? Sign in
              </a>
            </div>
          </form>
        </Form>
      </Card>
    </>
  );
};

export default SignUpForm;
