import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
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
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
              <Construction className="h-10 w-10 text-primary" />
            </div>
          </div>
          
          <h1 className="mb-4 text-4xl font-bold tracking-tight">{title}</h1>
          <p className="mb-8 text-lg text-muted-foreground">{description}</p>
          
          <Card className="mb-8">
            <CardContent className="p-8">
              <p className="text-muted-foreground">{comingSoonMessage}</p>
            </CardContent>
          </Card>
          
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild>
              <Link to="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
