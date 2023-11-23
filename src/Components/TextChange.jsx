import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function TextChange() {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid xs={12} sm={12} md={2}>
            <Item>xs</Item>
          </Grid>
          <Grid xs={12} sm={12} md={8}>
            <h1>React Case Wizard</h1>
            <TextField
              multiline
              minRows={4}
              maxRows={8}
              value={text}
              onChange={handleChange}
              placeholder="Type something..."
              fullWidth
              variant="outlined"
            />
            <div>
              <h2 style={{ textAlign: "left" }}>Characters Count:</h2>
              <p style={{ textAlign: "left" }}>{text}</p>
            </div>

            <Stack spacing={2} direction="row">
              <Button variant="outlined">UPPER CASE</Button>
              <Button variant="outlined">lower case</Button>
              <Button variant="outlined">Capitalize Word</Button>
              <Button variant="outlined">aLterNaTe cAsE</Button>
              <Button variant="outlined">Sentence Case</Button>
              <Button variant="outlined">tOGGLE cASE</Button>
            </Stack>

          </Grid>
          <Grid xs={12} sm={12} md={2}>
            <Item>xs</Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default TextChange;
