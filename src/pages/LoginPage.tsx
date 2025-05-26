
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import PageLayout from "@/components/common/PageLayout";

const LoginPage = () => {
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login");
  const location = useLocation();
  const navigate = useNavigate();
  
  // Login form state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  
  // Signup form state
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupConfirmPassword, setSignupConfirmPassword] = useState("");
  const [isSigningUp, setIsSigningUp] = useState(false);

  // Check URL parameters to see if we should show signup tab
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get("signup") === "true") {
      setActiveTab("signup");
    }
  }, [location]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    
    try {
      // This would be replaced with actual authentication logic
      // when connected to a backend like Supabase
      console.log("Login attempt:", { loginEmail, loginPassword });
      
      // Simulate login success for demo purposes
      setTimeout(() => {
        toast({
          title: "Login successful!",
          description: "Welcome back to TVM IT Solutions",
        });
        navigate("/");
      }, 1000);
    } catch (error) {
      console.error("Login error:", error);
      toast({
        title: "Login failed",
        description: "Please check your credentials and try again",
        variant: "destructive",
      });
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (signupPassword !== signupConfirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please make sure your passwords match",
        variant: "destructive",
      });
      return;
    }
    
    setIsSigningUp(true);
    
    try {
      // This would be replaced with actual signup logic
      // when connected to a backend like Supabase
      console.log("Signup attempt:", { signupName, signupEmail, signupPassword });
      
      // Simulate signup success for demo purposes
      setTimeout(() => {
        toast({
          title: "Account created!",
          description: "Welcome to TVM IT Solutions",
        });
        navigate("/");
      }, 1000);
    } catch (error) {
      console.error("Signup error:", error);
      toast({
        title: "Signup failed",
        description: "Please try again with different credentials",
        variant: "destructive",
      });
    } finally {
      setIsSigningUp(false);
    }
  };

  return (
    <PageLayout className="pt-32 pb-20 flex items-center justify-center">
      <div className="container-custom max-w-md">
        <Card className="w-full shadow-lg">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">
              Welcome to TVM IT Solutions
            </CardTitle>
            <CardDescription className="text-center">
              Enter your details to continue
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as "login" | "signup")}>
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>

              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your@email.com" 
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Password</Label>
                      <Button variant="link" size="sm" className="p-0 h-auto text-xs">
                        Forgot password?
                      </Button>
                    </div>
                    <Input 
                      id="password" 
                      type="password" 
                      placeholder="••••••••" 
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full mt-6" disabled={isLoggingIn}>
                    {isLoggingIn ? "Logging in..." : "Log in"}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="signup">
                <form onSubmit={handleSignup} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input 
                      id="name" 
                      placeholder="John Doe" 
                      value={signupName}
                      onChange={(e) => setSignupName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-email">Email</Label>
                    <Input 
                      id="signup-email" 
                      type="email" 
                      placeholder="your@email.com" 
                      value={signupEmail}
                      onChange={(e) => setSignupEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-password">Password</Label>
                    <Input 
                      id="signup-password" 
                      type="password" 
                      placeholder="••••••••" 
                      value={signupPassword}
                      onChange={(e) => setSignupPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm Password</Label>
                    <Input 
                      id="confirm-password" 
                      type="password" 
                      placeholder="••••••••" 
                      value={signupConfirmPassword}
                      onChange={(e) => setSignupConfirmPassword(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full mt-6" disabled={isSigningUp}>
                    {isSigningUp ? "Creating account..." : "Create account"}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter>
            <p className="text-xs text-center w-full text-muted-foreground">
              By continuing, you agree to our Terms of Service and Privacy Policy
            </p>
          </CardFooter>
        </Card>
      </div>
    </PageLayout>
  );
};

export default LoginPage;
