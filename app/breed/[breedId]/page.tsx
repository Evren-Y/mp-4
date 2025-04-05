import { fetchBreedData } from "@/lib/catApi";
import BreedDetails from "@/components/BreedDetails";

export const dynamic = "force-dynamic";

type Props = {
  params: {
    breedId: string;
  };
};

export default async function BreedPage({ params }: Props) {
  const breedData = await fetchBreedData(params.breedId);

  return (
    <div>
      <BreedDetails breedData={breedData} />
    </div>
  );
}
