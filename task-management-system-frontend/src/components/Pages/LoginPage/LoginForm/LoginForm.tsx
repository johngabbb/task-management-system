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
import { Checkbox } from "@/components/ui/checkbox";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface Props {
  setSignUpActive: (e: boolean) => void;
}

const LoginForm = ({ setSignUpActive }: Props) => {
  const formSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    password: z.string().min(5, {
      message: "Password must be at least 5 characters.",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <>
      <Card className="p-8 h-full rounded-none flex-1/2">
        <CardTitle className="text-center text-xl font-bold">Welcome to Gabam!</CardTitle>
        <CardDescription className="text-center -mt-5 mb-3 text-xs">
          Get started - it's free.
        </CardDescription>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <FormLabel className="text-sm font-medium whitespace-nowrap">Username</FormLabel>
                  <div className="text-xs text-destructive">
                    {form.formState.errors.username?.message}
                  </div>
                </div>
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem className="space-y-0">
                      <FormControl>
                        <Input placeholder="Username" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <FormLabel className="text-sm font-medium whitespace-nowrap">Password</FormLabel>
                  <div className="text-xs text-destructive">
                    {form.formState.errors.password?.message}
                  </div>
                </div>
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="space-y-0">
                      <FormControl>
                        <Input type="password" placeholder="Password" {...field} />
                      </FormControl>
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

            <Button
              type="submit"
              className="w-full bg-black hover:bg-neutral-800 whitespace-nowrap"
            >
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
                onClick={() => setSignUpActive(true)}
              >
                Don't have an account? Sign up
              </a>
            </div>
          </form>
        </Form>
      </Card>
    </>
  );
};

export default LoginForm;
