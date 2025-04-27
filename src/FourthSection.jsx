import React from "react";
import {
    Box,
    Typography,
    Card,
    CardContent,
    CardMedia,
    ThemeProvider,
    createTheme,
} from "@mui/material";

// Images for the certifications
import certificationImg1 from "/src/assets/certification1.png"; 
import certificationImg2 from "/src/assets/certification2.png";

// Theme for the dark gray background and white text
const darkGrayTheme = createTheme({
    palette: {
        mode: "dark",
        background: {
            default: "#424242",
        },
        text: {
            primary: "#ffffff",
        },
    },
});

const certifications = [
    {
        name: "Complete Data Science and Machine Learning Program",
        issuer: "GeeksforGeeks",
        image: certificationImg2,
    },
    {
        name: "Cloud Computing",
        issuer: "NPTEL",
        image: certificationImg1,
    },
];

const FourthSection = () => {
    return (
        <ThemeProvider theme={darkGrayTheme}>
            <Box
                id="certifications"
                sx={{
                    backgroundColor: "background.default",
                    color: "text.primary",
                    p: { xs: 3, md: 10 },
                    textAlign: "left",
                }}
            >
                <Typography variant="h4" sx={{ mb: 2 }}>
                    Certifications
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, fontSize: { xs: 16, md: 20 } }}>
                    I have completed several certifications that enhance my knowledge in various fields of technology and data science. Here are two key certifications:
                </Typography>

                {/* Certification Cards */}
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: { xs: "center", md: "center" },
                        gap: 4,
                    }}
                >
                    {certifications.map((cert) => (
                        <Card
                            key={cert.name}
                            sx={{
                                width: { xs: "100%", sm: "45%", md: "30%" },
                                maxWidth: 600,
                                backgroundColor: "#616161",
                                color: "#fff",
                                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                                transition: "transform 0.3s ease-in-out",
                                "&:hover": {
                                    transform: "scale(1.05)",
                                },
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            {/* Image Section */}
                            <CardMedia
                                component="img"
                                height="400"
                                image={cert.image}
                                alt={cert.name}
                                sx={{
                                    objectFit: "contain",
                                    backgroundColor: "#757575", 
                                }}
                            />

                            {/* Text Section */}
                            <CardContent
                                sx={{
                                    flexGrow: 1,
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    textAlign: "center",
                                }}
                            >
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontSize: { xs: "16px", md: "18px" },
                                        mb: 1,
                                        pt: 1,
                                    }}
                                >
                                    {cert.name}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        fontSize: { xs: "14px", md: "16px" },
                                        pb: 1,
                                    }}
                                >
                                    Issuer: {cert.issuer}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default FourthSection;
