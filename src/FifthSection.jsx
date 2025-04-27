import React from "react";
import {
  Box,
  Typography,
  ThemeProvider,
  createTheme,
  Divider,
} from "@mui/material";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#f1c40f",
    },
  },
  typography: {
    h6: {
      fontWeight: "bold",
    },
    body1: {
      color: "#555",
    },
  },
});

const achievements = [
  {
    title: "Smart India Hackathon (SIH) – Optimizing Carbon Footprint in Indian Coal Mines",
    description: (
      <>
        <strong>Tech Stack:</strong> Python, Streamlit, MongoDB, Matplotlib, Scikit-Learn
        <br />
        <strong>Outcome:</strong> Developed a web-based platform for Indian coal mines to track carbon emissions and simulate carbon neutrality strategies including afforestation, renewable energy use, and methane capture.
        <br />
        <strong>Impact:</strong> Provided a scalable solution aligning with India’s Net Zero goals, capable of aiding policy and operational decisions.
      </>
    ),
  },
  {
    title: "Google Nibbler – AI-Powered Prompt Engineering Project",
    description: (
      <>
        <strong>Tech Stack:</strong> Python, OpenAI GPT, Flask, MongoDB
        <br />
        <strong>Overview:</strong> Developed a platform that explores the art and science of prompt engineering to generate tailored outputs from large language models (LLMs).
        <br />
        <strong>Key Features:</strong> Designed modular and reusable prompts for diverse tasks like fitness suggestions, marketing content, and smart chatbot replies. Tuned prompt templates to improve relevance, coherence, and task-specific accuracy. Integrated the system into a lightweight web app for interactive testing and deployment.
        <br />
        <strong>Impact:</strong> Showcased how effective prompt design can significantly enhance LLM performance, enabling context-aware responses and automation across multiple domains.
      </>
    ),
  },
];

const FifthSection = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box
        id="achievements"
        sx={{
          p: 4,
          backgroundColor: "#f5f5f5",
          color: "text.primary",
          minHeight: "60vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography variant="h4" sx={{ mb: 4 }}>
            Competitions, Hackathons, & Achievements
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", px: { xs: 2, sm: 4, md: 6 } }}>
            {achievements.map((item, index) => (
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
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "5%" }}>
                  <Box
                    sx={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      backgroundColor: "#f1c40f",
                      mb: 1,
                    }}
                  />
                  {index < achievements.length - 1 && (
                    <Divider
                      orientation="vertical"
                      sx={{
                        height: "90px",
                        borderLeft: "2px dotted #f1c40f",
                      }}
                    />
                  )}
                </Box>

                <Box sx={{ pl: 4, width: "90%" }}>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body1">{item.description}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default FifthSection;
