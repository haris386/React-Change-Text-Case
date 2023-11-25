import React, { useState, useEffect } from "react";
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
  const [countCharacter, setCountCharacter] = useState(0);

  useEffect(() => {
    setCountCharacter(text.length);
  }, [text]);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const toUpperCase = () => {
    const upperCaseText = text.toUpperCase();
    setText(upperCaseText);
  };
  const toLowerCase = () => {
    const lowerCaseText = text.toLowerCase();
    setText(lowerCaseText);
  };

  const capitalizeWords = () => {
    const capitalizedSentence = text.replace(/\b\w/g, (match) => match.toUpperCase());
    setText(capitalizedSentence);
  };
  
  // const sentenceCase = () => {
  //   const sentenceCaseResult = text
  //     .split(' ')
  //     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  //     .join(' ');
  //   setText(sentenceCaseResult);
  // };

  const toKebabCase = () => {
    const kebabCaseResult = text
      .toLowerCase()
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/[^\w-]/g, ''); // Remove non-word characters
    setText(kebabCaseResult);
  };

  const toCamelCase = () => {
    const camelCaseResult = text
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]+(.)/g, (match, chr) => chr.toUpperCase());
    setText(camelCaseResult);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid xs={12} sm={12} md={2}>
            <Item>xs</Item>
          </Grid>
          <Grid xs={12} sm={12} md={8}>
            <h1 style={{ color: "black" }}>React Case Wizard</h1>
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
              <h2 style={{ textAlign: "left", color: "black" }}>
                Characters Count: {countCharacter}
              </h2>
            </div>

            <Stack spacing={2} direction="row">
              <Button variant="outlined" onClick={toUpperCase}>
                UPPER CASE
              </Button>
              <Button variant="outlined" onClick={toLowerCase}>
                lower case
              </Button>
              <Button variant="outlined" onClick={capitalizeWords}>Capitalize Word</Button>
              <Button variant="outlined" onClick={toKebabCase}>kebab-case</Button>
              <Button variant="outlined" onClick={toCamelCase}>camelCase</Button>
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
