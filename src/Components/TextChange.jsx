import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import './style.css'

import { createTheme, ThemeProvider } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function TextChange() {

  const theme = createTheme({
    palette: {
      mode: 'dark', // or 'light' based on your preference
      primary: {
        main: '#fff', // Set primary color to white
      },
    },
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderColor: '#fff', // Set border color to white
          },
        },
      },
    },
  });

  const [text, setText] = useState("");
  const [countCharacter, setCountCharacter] = useState(0);
  const [countWords, setCountWords] = useState(0);


  useEffect(() => {
    setCountCharacter(text.length);
    
    // Split the text into words and count them
    const words = text.split(/\s+/).filter((word) => word !== '');
    setCountWords(words.length);
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
    <ThemeProvider theme={theme}>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid xs={12} sm={12} md={2}>
            {/* <Item>xs</Item> */}
          </Grid>
          <Grid xs={12} sm={12} md={8}>
            <h1 style={{ color: "white" }} className="title-heading">React &nbsp;Case&nbsp; Wizard</h1>
            <TextField
              multiline
              minRows={4}
              maxRows={8}
              value={text}
              onChange={handleChange}
              placeholder="Type something..."
              fullWidth
              variant="outlined"
              inputProps={{ style: { color: "white", borderColor: "white" } }}
            />
            <div>
              <h2 style={{ textAlign: "left", color: "white" }}>
                Characters Count: {countCharacter}
              </h2>
            </div>
            <div>
              <h2 style={{ textAlign: "left", color: "white" }}>
                Word Count: {countWords}
              </h2>
            </div>

            <Stack spacing={2} direction="row" sx={{ justifyContent: 'center' }}>
              <Button variant="outlined" onClick={toUpperCase} style = {{color: "white", border: "1px solid white"}}>
                UPPER CASE
              </Button>
              <Button variant="outlined" sx={{textTransform: 'lowercase'}} onClick={toLowerCase} style = {{color: "white", border: "1px solid white"}}>
                lower case
              </Button>
              <Button variant="outlined" sx={{ textTransform: 'capitalize' }} onClick={capitalizeWords} style = {{color: "white", border: "1px solid white"}}>Capitalize Word</Button>
              <Button variant="outlined" sx={{textTransform: 'lowercase'}} onClick={toKebabCase} style = {{color: "white", border: "1px solid white"}}>kebab-case</Button>
              <Button variant="outlined" sx={{textTransform: 'lowercase'}} onClick={toCamelCase} style = {{color: "white", border: "1px solid white"}}>camel<span style={{ textTransform: 'capitalize' }}>C</span>ase</Button>
            </Stack>
          </Grid>
          <Grid xs={12} sm={12} md={2}>
            {/* <Item>xs</Item> */}
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
    </>
  );
}

export default TextChange;
