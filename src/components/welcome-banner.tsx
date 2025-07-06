import { Card, CardContent } from "./ui/card";

export default function WelcomeBanner() {
  return (
    <Card>
      <CardContent className="text-center">
        <h1 className="text-4xl font-bold text-cgreen text-shadow-foreground">
          Al Quran Digital Bahasa Indonesia
        </h1>
      </CardContent>
    </Card>
  );
}
