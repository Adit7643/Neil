import React from "react";
import {
  Box,
  Typography,
  ThemeProvider,
  createTheme,
  Divider,
} from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#757575",
    },
    background: {
      default: "#424242", // Dark background
      paper: "#1e1e1e", // Slightly lighter dark for boxes
    },
    text: {
      primary: "#fff",
      secondary: "#ccc",
    },
  },
  typography: {
    h6: {
      fontWeight: "bold",
    },
    body1: {
      color: "#ccc",
    },
  },
});

const researchItems = [
  {
    title: "Vision-Powered Real Time Face Mask Detection",
    description: (
      <>
        📑 <strong>Research Paper:</strong> An AI-based real-time system detecting face masks to enhance public safety in crowded areas.
      </>
    ),
  },
  {
    title: "Cloud-Powered AI-Based Smart Resume Screener",
    description: (
      <>
        📜 <strong>Patent:</strong> AI-driven hiring tool to automatically rank and filter job applications based on customized criteria, reducing recruiter workload and improving hiring efficiency.
      </>
    ),
  },
];

const SixthSection = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        id="research"
        sx={{
          p: 4,
          backgroundColor: "background.default",
          color: "text.primary",
          minHeight: "60vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography variant="h4" sx={{ mb: 4 }}>
            Research Publication / Patent
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              px: { xs: 2, sm: 4, md: 6 },
            }}
          >
            {researchItems.map((item, index) => (
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
                  {index < researchItems.length - 1 && (
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

export default SixthSection;
