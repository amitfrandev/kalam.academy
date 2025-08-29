"use client";

import Image from "next/image";
import Link from "next/link";
import LOGO from "@/assets/LOGO_COL-3D.png";
import shadows from "@/assets/header/logo-be.svg";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { EqualApproximately, GraduationCap, Handshake } from "lucide-react";

// Example courses
const courses = [
  {
    title: "Web Development",
    href: "/web-development-course-in-ranchi",
    description: "Learn modern full-stack development.",
  },
  {
    title: "Digital Marketing",
    href: "/digital-marketing-course-in-ranchi",
    description: "Master SEO, ads & online branding.",
  },
];

export default function Header() {
  return (
    <header className="fixed w-full md:mx-0 px-4 top-0 z-50">
      <div className="max-w-7xl  relative mx-auto mt-4 backdrop-blur-[4px] bg-white/30 shadow rounded-full flex items-center justify-between px-4 py-2">
        
        {/* Logo */}
        <span className="flex gap-2 overflow-hidden text-white archivo-900 text-2xl">
          <Link href="/">
          <div className="absolute inset-0 -z-10 hidden md:block md:-left-0 opacity-80">
          <Image
            src={shadows}
            alt="background"
            objectFit="contain"
            objectPosition="left"
            fill
            priority
          />
        </div>
            <Image
              src={LOGO.src}
              alt="Kalam Academy Logo"
              width={60}
              height={60}
              priority
            />
          </Link>
          <h3 className="md:block hidden">KALAM ACADEMY</h3>
        </span>

        {/* Navigation */}
        <NavigationMenu>
          <NavigationMenuList className="gap-0 md:gap-1">
            {/* Courses Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <span className="hidden md:inline">Courses</span>
                <span className="md:hidden">
                  <GraduationCap />
                </span>
              </NavigationMenuTrigger>
              <NavigationMenuContent className="z-50">
                <ul className="grid w-[300px] gap-2 p-2">
                  {courses.map((course) => (
                    <ListItem
                      key={course.title}
                      title={course.title}
                      href={course.href}
                    >
                      {course.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Business */}
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/business">
                  <span className="hidden md:inline">Business</span>
                  <span className="md:hidden">
                    <Handshake />
                  </span>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* About */}
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/about">
                  <span className="hidden md:inline">About Us</span>
                  <span className="md:hidden">
                    <EqualApproximately />
                  </span>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}

function ListItem({ title, children, href, ...props }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="block rounded-md p-3 hover:bg-accent hover:text-accent-foreground transition-colors"
        >
          <div className="text-sm font-medium">{title}</div>
          <p className="text-muted-foreground text-xs md:text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
