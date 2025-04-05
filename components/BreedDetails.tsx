import { Paper } from "@mui/material";
import Image from "next/image";

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

export default function BreedDetails({ breedData }: { breedData: BreedData }) {
  if (!breedData || !breedData.breeds || breedData.breeds.length === 0) {
    return <p>Not a valid ID (must be a valid abbreviation).</p>;
  }

  const breed = breedData.breeds[0];

  return (
    <Paper
      elevation={3}
      sx={{
        maxWidth: "600px",
        margin: "30px auto",
        padding: "24px",
        textAlign: "center",
      }}
    >
      <h2 style={{ marginBottom: "16px" }}>{breed.name}</h2>

      {breedData.url && (
        <Image
          src={breedData.url}
          alt={breed.name}
          width={500}
          height={400}
          style={{
            borderRadius: "8px",
            marginBottom: "20px",
            width: "100%",
            height: "auto",
          }}
          priority
        />
      )}

      <p>
        <strong>Origin:</strong> {breed.origin}
      </p>
      <p>
        <strong>Temperament:</strong> {breed.temperament}
      </p>
      <p>
        <strong>Description:</strong> {breed.description}
      </p>
    </Paper>
  );
}
