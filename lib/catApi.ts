import "server-only";

export async function fetchBreedData(breedId: string) {
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
    throw new Error("Failed to fetch breed data");
  }

  const data = await response.json();
  return data[0];
}
