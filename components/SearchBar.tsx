"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { TextField, Button, FormHelperText, Box } from "@mui/material";

export default function SearchBar() {
  const [breedId, setBreedId] = useState("");
  const router = useRouter();

  return (
    <Box
      component="form"
      onSubmit={(e) => {
        e.preventDefault();
        const trimmed = breedId.trim().toLowerCase();
        if (trimmed) router.push(`/breed/${encodeURIComponent(trimmed)}`);
      }}
      sx={{
        width: 400,
        margin: "40px auto",
        padding: 3,
        backgroundColor: "teal",
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <TextField
        variant="filled"
        label="Breed ID"
        fullWidth
        sx={{ backgroundColor: "white" }}
        value={breedId}
        onChange={(e) => setBreedId(e.target.value)}
        placeholder="e.g., beng"
      />

      <FormHelperText sx={{ color: "white", mt: 1 }}>
        Type a cat breed ID to search (e.g., <code>beng</code>, <code>abys</code>)
      </FormHelperText>

      <Box display="flex" justifyContent="center" mt={3}>
        <Button
          sx={{ width: 80 }}
          variant="contained"
          type="submit"
          disabled={!breedId.trim()}
        >
          Search
        </Button>
      </Box>
    </Box>
  );
}
