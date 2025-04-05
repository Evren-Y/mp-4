// app/breed/[breedId]/page.tsx

import { fetchBreedData } from "@/lib/catApi";
import BreedDetails from "@/components/BreedDetails";

interface PageProps {
  params: {
    breedId: string;
  };
}

export default async function BreedPage({ params }: PageProps) {
  const breedData = await fetchBreedData(params.breedId);

  return (
    <div>
      <BreedDetails breedData={breedData} />
    </div>
  );
}
