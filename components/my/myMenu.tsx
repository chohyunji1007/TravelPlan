// components/MyMenu.tsx
"use client"
import { ReactNode } from 'react';
import Link from 'next/link';

import React, { useState }  from 'react';
import { CircleUser, Menu, Package2, Search, Plane } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

interface MyMenuProps {
  children: ReactNode;
}


const MyMenu = () => {
    const [isClicked, setIsClicked] = useState('/');
  return (
    <div>
        <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
            href="/"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
            onClick={() => setIsClicked('/')}
        >
            <Plane className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
        </Link>
        
        <Link
            href="/plan"
            className={`${isClicked=='plan' ? 'text-foreground' : 'text-muted-foreground'} transition-colors hover:text-foreground`}
            onClick={() => setIsClicked('plan')}
        >
            여행 계획 짜기
        </Link>
        <Link
            href="history"
            className={`${isClicked=='history' ? 'text-foreground' : 'text-muted-foreground'} transition-colors hover:text-foreground`}
            onClick={() => setIsClicked('history')}
        >
            이전 계획 보기
        </Link>
        
        </nav>
        {/* <Sheet>
        <SheetTrigger asChild>
            <Button
            variant="outline"
            size="icon"
            className="shrink-0 md:hidden"
            >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
            </Button>
        </SheetTrigger>
        <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
            <Link
                href="#"
                className="flex items-center gap-2 text-lg font-semibold"
            >
                <Package2 className="h-6 w-6" />
                <span className="sr-only">Acme Inc</span>
            </Link>
            <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
            >
                Dashboard
            </Link>
            <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
            >
                Orders
            </Link>
            <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
            >
                Products
            </Link>
            <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
            >
                Customers
            </Link>
            <Link href="#" className="hover:text-foreground">
                Settings
            </Link>
            </nav>
        </SheetContent>
        </Sheet> */}
        <div className="flex w-1/2 items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
                type="search"
                placeholder="Search products..."
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
            />
            </div>
        </form>
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
            </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
            <DropdownMenuLabel>내 계정</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>설정</DropdownMenuItem>
            
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
        </div>
    </header>

  </div>
  );
};

export default MyMenu;
