// lib/catApi.ts
import "server-only";

interface Breed {
  name: string;
  origin: string;
  temperament: string;
  description: string;
}

interface BreedData {
  url: string;
  breeds: Breed[];
}

export async function fetchBreedData(breedId: string): Promise<BreedData | null> {
  const response = await fetch(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`,
    {
      headers: {
        "x-api-key": process.env.CAT_API_KEY!,
      },
      cache: "no-store",
    }
  );

  if (!response.ok) {
    return null;
  }

  const data = await response.json();
  return data[0] ?? null;
}
