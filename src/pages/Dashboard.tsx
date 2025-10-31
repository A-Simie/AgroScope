import { Header } from "@/components/Header";
import { WelcomeSection } from "@/components/WelcomeSection";
import { ScanPlantCard } from "@/components/ScanPlantCard";
import { WeatherCard } from "@/components/WeatherCard";
import { RecentScans } from "@/components/RecentScans";

const Dashbaord = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8 md:px-8">
        <WelcomeSection />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <ScanPlantCard />
          </div>

          <div>
            <WeatherCard />
          </div>
        </div>

        <RecentScans />
      </main>
    </div>
  );
};

export default Dashbaord;
