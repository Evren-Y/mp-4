import { fetchBreedData } from "@/lib/catApi";
import BreedDetails from "@/components/BreedDetails";

export default async function BreedPage(props: { params: { breedId: string } }) {
  let breedData;

  try {
    const breedDataResult = await fetchBreedData(props.params.breedId);
    breedData = breedDataResult;
  } catch (err) {
    return <div>Error: {(err as Error).message}</div>;
  }

  return (
    <div>
      <BreedDetails breedData={breedData} />
    </div>
  );
}
