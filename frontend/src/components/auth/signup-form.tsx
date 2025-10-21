import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuthStore } from "@/stores/useAuthStore";
import { useNavigate } from "react-router-dom";

const SignUpSchema = z.object({
  displayName: z.string().min(1, "Display name must be at least 1 character"),
  username: z.string().min(1, "Username must be at least 1 character"),
  email: z.email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type SignupFormData = z.infer<typeof SignUpSchema>;
export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormData>({
    resolver: zodResolver(SignUpSchema),
  });
  const { signUp } = useAuthStore();
  const navigate = useNavigate();

  const onSubmit = async (data: SignupFormData) => {
    // Handle form submission logic here
    const { displayName, username, email, password } = data;
    await signUp(username, password, email, displayName);
    navigate("/signin");
  };
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
              {/*Header */}
              <div className="flex flex-col items-center text-center gap-2">
                <a href="/" className="mx-auto block w-fit text-center">
                  <img
                    src="/PokeballLogo.png"
                    alt="Logo"
                    className="w-12 h-12"
                  />
                </a>
                <h1 className="text-2xl font-bold">Create PokeWorld account</h1>
                <p className="text-muted-foreground text-balance">
                  Welcome in! Create account to start
                </p>
              </div>
              {/*display name */}
              <div className="space-y-2">
                <Label htmlFor="displayName" className="block font-medium">
                  Display name
                </Label>
                <Input
                  id="displayName"
                  type="text"
                  placeholder="Your display name"
                  {...register("displayName")}
                />
                {errors.displayName && (
                  <p className="text-destructive text-sm">
                    {errors.displayName.message}
                  </p>
                )}
              </div>
              {/*Username */}
              <div>
                <Label htmlFor="username" className="mb-2 block font-medium">
                  Username
                </Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Your username"
                  {...register("username")}
                />
                {errors.username && (
                  <p className="text-destructive text-sm">
                    {errors.username.message}
                  </p>
                )}
              </div>
              {/*Email */}
              <div>
                <Label htmlFor="email" className="mb-2 block font-medium">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your email"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-destructive text-sm">
                    {errors.email.message}
                  </p>
                )}
              </div>
              {/*Password*/}
              <div>
                <Label htmlFor="password" className="mb-2 block font-medium">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Your password"
                  {...register("password")}
                />
                {errors.password && (
                  <p className="text-destructive text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <Button
                className="mt-4 w-full"
                type="submit"
                disabled={isSubmitting}
              >
                Create Account
              </Button>
              <div className="text-center text-sm text-muted-foreground">
                Already have an account?{" "}
                <a
                  href="/signin"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  Sign In
                </a>
              </div>
            </div>
          </form>
          <div className="bg-muted relative hidden md:block">
            <img
              src="/PokeballLogo.png"
              alt="Image"
              className="absolute top-1/2 -translate-y-1/2 object-cover "
            />
          </div>
        </CardContent>
      </Card>
      <div className="px-6 text-center *:[a]:hover:text-primary *:[a]:underline *:[a]:underline-offset-4 text-xs text-balance text-muted-foreground md:px-8">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  );
}
