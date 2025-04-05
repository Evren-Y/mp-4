// app/breed/[breedId]/page.tsx

import { fetchBreedData } from "@/lib/catApi";
import BreedDetails from "@/components/BreedDetails";

type Params = { params: { breedId: string } };

export default async function Page({ params }: Params) {
  const breedData = await fetchBreedData(params.breedId);

  return (
    <div>
      <BreedDetails breedData={breedData} />
    </div>
  );
}
