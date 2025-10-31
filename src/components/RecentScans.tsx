import { PlantCard } from "./PlantCard";
import maizeLeaf from "@/assets/maize-leaf.jpeg";
import tomatoPlant from "@/assets/tomato-plant.jpg";
import soybeanCrop from "@/assets/soybean.jpg";

export const RecentScans = () => {
  const scans = [
    {
      image: maizeLeaf,
      title: "Maize Leaf",
      status: "Rust Detected",
      statusType: "danger" as const,
    },
    {
      image: tomatoPlant,
      title: "Tomato Plant",
      status: "Healthy",
      statusType: "healthy" as const,
    },
    {
      image: soybeanCrop,
      title: "Soybean Crop",
      status: "Nitrogen Deficiency",
      statusType: "warning" as const,
    },
  ];

  return (
    <div className="mt-12 ">
      <h2 className="text-2xl font-bold text-foreground mb-6">
        Your Recent Scans
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 dark:bg-gray-900">
        {scans.map((scan, index) => (
          <PlantCard key={index} {...scan} />
        ))}

        <PlantCard title="" status="" statusType="healthy" isEmpty />
      </div>
    </div>
  );
};
