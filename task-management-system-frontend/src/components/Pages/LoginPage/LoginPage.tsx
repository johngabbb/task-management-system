import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { ReactEventHandler, ReactHTMLElement, useState } from "react";

interface Props {}

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(5, {
    message: "Password must be at least 5 characters.",
  }),
});

const LoginPage = (props: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const [signUpActive, setSignUpActive] = useState<boolean>(false);

  const handleSignUp = () => {
    const negateSignUp = !signUpActive;

    setSignUpActive(negateSignUp);
    console.log(negateSignUp);
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-neutral-900">
      <div className="w-full max-w-4xl rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Form Side */}
          <Card className="p-8 rounded-none md:rounded-l-lg">
            <CardTitle className="text-center text-xl font-bold">Welcome to Hunter Jira!</CardTitle>
            <CardDescription className="text-center -mt-5 mb-3 text-xs">
              Get started - it's free.
            </CardDescription>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <FormLabel className="block text-sm font-medium mb-2">Username</FormLabel>
                    <FormField
                      control={form.control}
                      name="username"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Username" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div>
                    <FormLabel className="block text-sm font-medium mb-2">Password</FormLabel>
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
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <label
                      htmlFor="remember"
                      className="text-sm font-normal leading-none text-muted-foreground hover:text-neutral-800 hover:cursor-pointer transition-colors"
                    >
                      Remember me
                    </label>
                  </div>

                  <a
                    href="#"
                    className="text-sm font-normal text-muted-foreground hover:underline cursor-pointer"
                  >
                    Forgot Password
                  </a>
                </div>

                <Button type="submit" className="w-full bg-black hover:bg-neutral-800">
                  Sign in
                </Button>

                <div className="relative flex items-center py-2">
                  <div className="flex-grow border-t border-gray-300"></div>
                  <span className="flex-shrink mx-3 text-xs text-gray-500 uppercase">
                    Or continue with
                  </span>
                  <div className="flex-grow border-t border-gray-300"></div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Button type="button" variant="outline" className="w-full">
                    GitHub
                  </Button>
                  <Button type="button" variant="outline" className="w-full">
                    Google
                  </Button>
                </div>

                <div className="text-center pt-2">
                  <a
                    href="#"
                    className="text-sm font-normal text-muted-foreground hover:underline cursor-pointer"
                    onClick={handleSignUp}
                  >
                    Don't have an account? Sign up
                  </a>
                </div>
              </form>
            </Form>
          </Card>

          {/* Image Side */}
          <div className="relative h-full rounded-none md:rounded-r-lg overflow-hidden">
            <img
              src="https://images.pexels.com/photos/19027154/pexels-photo-19027154/free-photo-of-cup-of-coffee-with-foam-by-headphones.jpeg"
              alt="Coffee and headphones"
              className="absolute inset-0 w-full h-full object-contain md:object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
