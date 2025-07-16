import { buttonVariants } from "@/components/ui/button";
import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="w-full h-dvh flex items-center justify-center">
      <div className="text-center space-y-8">
        <h1 className="text-xl md:text-3xl">404 - Page not found</h1>
        <Link to="/" className={buttonVariants({ variant: "outline" })}>
          Kembali beranda
        </Link>
      </div>
    </div>
  );
}
