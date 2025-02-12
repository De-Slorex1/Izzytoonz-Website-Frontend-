"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from 'lucide-react'

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const [open, setOpen] = useState(false)

  const NavItems = () => (
    <>
      <Button variant="ghost" className="w-full justify-start">
        Dashboard
      </Button>
      <Button variant="ghost" className="w-full justify-start">
        Users
      </Button>
      <Button variant="ghost" className="w-full justify-start">
        Products
      </Button>
      <Button variant="ghost" className="w-full justify-start">
        Analytics
      </Button>
    </>
  )

  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="md:hidden fixed left-4 top-4 z-40"
          >
            <Menu className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64">
          <nav className="flex flex-col space-y-4 bg-[#000080]">
            <NavItems />
          </nav>
        </SheetContent>
      </Sheet>

      <nav
        className={cn("hidden md:flex md:flex-col space-y-4", className)}
        {...props}
      >
        <NavItems />
      </nav>
    </>
  )
}

