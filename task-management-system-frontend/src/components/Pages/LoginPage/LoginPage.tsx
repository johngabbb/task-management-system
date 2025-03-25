import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

interface Props {}

const LoginPage = (props: Props) => {
  return (
    <>
      <div className="h-full flex items-center justify-center">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Login</CardTitle>
          </CardHeader>
        </Card>
      </div>
    </>
  );
};

export default LoginPage;
