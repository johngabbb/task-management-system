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

  const handleLoginSignUp = () => {
    const negateSignUp = !signUpActive;

    setSignUpActive(negateSignUp);
    console.log(negateSignUp);
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  const LoginSignUpForm = (
    <Card className="p-8 h-full rounded-none flex-1/2">
      <CardTitle className="text-center text-xl font-bold">Welcome to Gabam!</CardTitle>
      <CardDescription className="text-center -mt-5 mb-3 text-xs">
        Get started - it's free.
      </CardDescription>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <div>
              <FormLabel className="block text-sm font-medium mb-2 whitespace-nowrap">
                Username
              </FormLabel>
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
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <label
                htmlFor="remember"
                className="text-sm font-normal leading-none text-muted-foreground hover:text-neutral-800 hover:cursor-pointer transition-colors whitespace-nowrap"
              >
                Remember me
              </label>
            </div>

            <a
              href="#"
              className="text-sm font-normal text-muted-foreground hover:underline cursor-pointer whitespace-nowrap"
            >
              Forgot Password
            </a>
          </div>

          <Button type="submit" className="w-full bg-black hover:bg-neutral-800 whitespace-nowrap">
            Sign in
          </Button>

          <div className="flex items-center py-2">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="flex-shrink mx-3 text-xs text-gray-500 uppercase whitespace-nowrap">
              Or continue with
            </span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button type="button" variant="outline" className="w-full whitespace-nowrap">
              GitHub
            </Button>
            <Button type="button" variant="outline" className="w-full whitespace-nowrap">
              Google
            </Button>
          </div>

          <div className="text-center pt-2">
            <a
              href="#"
              className="text-sm font-normal text-muted-foreground hover:underline cursor-pointer whitespace-nowrap"
              onClick={handleLoginSignUp}
            >
              Don't have an account? Sign up
            </a>
          </div>
        </form>
      </Form>
    </Card>
  );

  const ImageCard = (
    <div className="flex-1/2 rounded-none">
      <img
        src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlJTIwbGFwdG9wfGVufDB8fDB8fHww"
        alt="Coffee and headphones"
        className="h-full object-cover"
      />
    </div>
  );

  return (
    <div className="h-full bg-inherit flex items-center justify-center min-w-[600px] min-h-[520px]">
      <div className="w-full max-w-4xl rounded-lg overflow-auto">
        <div className="flex flex-wrap">
          {/* Form Side */}

          {LoginSignUpForm}

          {/* Image Side */}
          {ImageCard}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
