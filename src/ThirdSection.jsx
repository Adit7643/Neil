import React from "react";
import {
  Box,
  Typography,
  ThemeProvider,
  createTheme,
  Divider,
} from "@mui/material";

const darkGrayishTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#f1c40f", // Yellow for milestone dots
    },
  },
  typography: {
    h6: {
      fontWeight: "bold",
    },
    body1: {
      color: "#555", // Dark gray for description text
    },
  },
});

// Updated projects array with new data
const projects = [
  {
    title: "Translator Bot Using Gemini API",
    description: (
      <>
        <strong>Objective:</strong> Developed a multilingual translator bot capable of translating user input across multiple languages.
        <br />
        <strong>Tech Stack:</strong> Python, Googletrans API, Streamlit
        <br />
        <strong>Methodology:</strong> Integrated language detection and translation APIs, built a user-friendly interface for real-time text input and output.
        <br />
        <strong>Features:</strong> Supported over 10 languages, provided instant translation with copy/share options.
        <br />
        <strong>Link to Project:</strong> <a href="https://translatorbotz.streamlit.app/">Project Link</a>
      </>
    ),
  },
  {
    title: "MNIST Handwritten Digit Recognizer",
    description: (
      <>
        <strong>Objective:</strong> Classified handwritten digits (0–9) using the MNIST dataset.
        <br />
        <strong>Tech Stack:</strong> Python, TensorFlow, Keras, Matplotlib
        <br />
        <strong>Methodology:</strong> Built and trained a Convolutional Neural Network (CNN); applied image preprocessing, model tuning, and evaluation with confusion matrix and accuracy metrics.
        <br />
        <strong>Accuracy:</strong> Achieved over 98% accuracy on the test dataset.
        <br />
        <strong>Link to Project:</strong> <a href="https://github.com/Neil-05/MNIST-HANDWRITTEN-RECOGNIZER">Project Link</a>
      </>
    ),
  },
];

const ThirdSection = () => {
  return (
    <ThemeProvider theme={darkGrayishTheme}>
      <Box
        id="project"
        sx={{
          p: 4,
          backgroundColor: "#f5f5f5", // Light gray background
          color: "text.primary",
          minHeight: "60vh",
          display: "flex",
          justifyContent: "center", // Centers content horizontally
          alignItems: "center", // Centers content vertically if needed
        }}
      >
        <Box>
          <Typography variant="h4" sx={{ mb: 4 }}>
            Projects
          </Typography>

          {/* Timeline Format */}
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", px: { xs: 2, sm: 4, md: 6 } }}>
            {projects.map((project, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 6,
                  position: "relative",
                  width: "100%",
                }}
              >
                {/* Left-side Divider and Circle */}
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "5%" }}>
                  {/* Yellow Circle for Milestone */}
                  <Box
                    sx={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      backgroundColor: "#f1c40f",
                      mb: 1,
                    }}
                  />

                  {/* Dotted Line */}
                  {index < projects.length - 1 && (
                    <Divider
                      orientation="vertical"
                      sx={{
                        height: "90px",
                        borderLeft: "2px dotted #f1c40f",
                      }}
                    />
                  )}
                </Box>

                {/* Project Info to the right of the line */}
                <Box sx={{ pl: 4, width: "90%" }}>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body1">{project.description}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default ThirdSection;
