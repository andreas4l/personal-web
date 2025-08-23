import { AppAboutPage } from "@/components/app-about-page";
import { AppHomePage } from "@/components/app-home-page";
import { AppNavbar } from "@/components/app-navbar";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <AppNavbar />
      <AppHomePage />
      <AppAboutPage />
    </div>
  );
}
