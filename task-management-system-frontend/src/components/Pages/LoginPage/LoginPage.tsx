import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <>
      <div className="h-full flex items-center justify-center">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <Card className="p-9 shadow-2xl shadow-black w-100">
              <CardTitle className="flex justify-center items-center -mb-5 font-bold text-lg">
                Welcome Back
              </CardTitle>
              <CardDescription className="flex justify-center mb-3 text-xs">
                Get started - it's free.
              </CardDescription>
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="Username" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="Password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-between items-center">
                <div className="flex flex-row gap-2.5">
                  <Checkbox id="remember" />
                  <label
                    htmlFor="remember"
                    className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted-foreground hover:text-neutral-800  hover:cursor-pointer transition-colors"
                  >
                    Remember me
                  </label>
                </div>

                <div>
                  <a
                    href="#"
                    className="text-sm font-normal text-muted-foreground hover:underline cursor-pointer"
                  >
                    Forgot Password
                  </a>
                </div>
              </div>

              <Button type="submit" className="hover: cursor-pointer">
                Sign in
              </Button>

              <div className="relative flex items-center py-1">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-1 text-[10px] text-gray-500 font-semibold">
                  OR CONTINUE WITH
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>

              <div className="flex justify-center items-center w-full gap-5">
                <Button
                  type="button"
                  className="bg-white border-gray-300 border-1 text-muted-foreground hover:bg-neutral-200 transition-colors min-w-1/2"
                >
                  GitHub
                </Button>
                <Button
                  type="button"
                  className="bg-white border-gray-300 border-1 text-muted-foreground hover:bg-neutral-200 transition-colors min-w-1/2"
                >
                  Google
                </Button>
              </div>

              <a
                href="#"
                className="text-sm font-normal text-muted-foreground hover:underline cursor-pointer mr-auto ml-auto"
              >
                Don't have an account? Sign up
              </a>
            </Card>
          </form>
        </Form>
      </div>
    </>
  );
};

export default LoginPage;

{
  /* <div className="w-1/2">
          <img
            src="https://i0.wp.com/picjumbo.com/wp-content/uploads/red-and-blue-pillars-wallpaper-abstract-background-free-image.jpeg?w=600&quality=80"
            alt="Serene landscape"
            className="h-full w-full object-cover"
          />
        </div> */
}
