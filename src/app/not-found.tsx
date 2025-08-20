import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen gap-2">
            <h1 className="font-bold text-8xl">404</h1>
            <p className="font-bold text-2xl">Page Not Found</p>
            <p className="pb-6 text-muted-foreground">{"What are you looking for? That page doesn't exist"}</p>
            <Button>
                <Link href="/">Go Home</Link>
            </Button>
        </div>

    );
}