"use client"

import Image from "next/image"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <div className="flex flex-col items-center gap-2 text-center">
          <a href="#" className="flex flex-col items-center font-medium">
            <div className="flex items-center justify-center rounded-md">
              <Image
                src="/logo.jpg"
                alt="logo"
                width={200}
                height={200}
                className="max-w-[200px] w=full h-auto"
              />
            </div>
          </a>
          <h1 className="text-xl font-bold">Welcome to HastyPH</h1>
        </div>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input id="password" type="password" required />
              </div>
              <div className="flex flex-col items-center gap-2">
                <Button type="submit" className="w-full bg-marigold">
                  Login
                </Button>
                <Button
                  onClick={() => (location.href = "/dashboard")}
                  className="w-full"
                >
                  Dashboard
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter>Powered by: Czeth</CardFooter>
      </Card>
    </div>
  )
}
