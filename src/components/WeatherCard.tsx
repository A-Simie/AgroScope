import { Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const WeatherCard = () => {
  return (
    <Card className="p-6 dark:bg-gray-900">
      <div className="mb-4">
        <p className="text-sm text-muted-foreground mb-2">Today's Forecast</p>
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-1">
              Ilorin: 29°C
            </h3>
            <p className="text-sm text-muted-foreground">
              Humidity 80%, Partly Cloudy
            </p>
          </div>
          <div className="p-3 bg-warning/10 rounded-lg">
            <Sun className="h-8 w-8 text-warning" />
          </div>
        </div>
      </div>

      <Button variant="secondary" className="w-full">
        Check Weather
      </Button>
    </Card>
  );
};
