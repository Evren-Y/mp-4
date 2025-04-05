import { fetchBreedData } from "@/lib/catApi";
import BreedDetails from "@/components/BreedDetails";

export const dynamic = "force-dynamic";

type PageProps = {
  params: {
    breedId: string;
  };
};

export default async function BreedPage({ params }: PageProps) {
  const breedData = await fetchBreedData(params.breedId);

  return (
    <div>
      <BreedDetails breedData={breedData} />
    </div>
  );
}