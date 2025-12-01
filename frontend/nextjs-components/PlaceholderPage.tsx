"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { ArrowLeft, Construction } from "lucide-react";

interface PlaceholderPageProps {
  title: string;
  description: string;
  comingSoonMessage?: string;
}

export default function PlaceholderPage({ 
  title, 
  description, 
  comingSoonMessage = "This section is currently under development. Check back soon for updates!"
}: PlaceholderPageProps) {
  return (
    <div className="min-h-screen pt-16">
      <div className="container px-4 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/20">
              <Construction className="h-10 w-10 text-primary" />
            </div>
          </div>
          
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white">{title}</h1>
          <p className="mb-8 text-lg text-gray-300">{description}</p>
          
          <Card className="curved-element glass-effect border-white/10 mb-8">
            <CardContent className="p-8">
              <p className="text-gray-300">{comingSoonMessage}</p>
            </CardContent>
          </Card>
          
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button className="curved-element bg-white text-black hover:bg-gray-100" asChild>
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <Button variant="outline" className="curved-element border-white/20 bg-white/5 text-white hover:bg-white/10" asChild>
              <Link href="/contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
