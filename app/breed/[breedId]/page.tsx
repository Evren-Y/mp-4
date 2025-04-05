/* eslint-disable @typescript-eslint/no-explicit-any */


import { fetchBreedData } from "@/lib/catApi";
import BreedDetails from "@/components/BreedDetails";

export const dynamic = "force-dynamic";

export default async function BreedPage({ params }: any) {
  const breedId = params?.breedId;

  if (!breedId || typeof breedId !== "string") {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <p>Invalid or missing breed ID.</p>
      </div>
    );
  }

  let breedData = null;

  try {
    breedData = await fetchBreedData(breedId);
  } catch (err) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <p>Error fetching breed details: {(err as Error).message}</p>
      </div>
    );
  }

  if (!breedData) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <p>No breed data found for ID: {breedId}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <BreedDetails breedData={breedData} />
    </div>
  );
}
