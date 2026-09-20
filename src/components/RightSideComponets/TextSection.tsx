
import { Box, Typography } from "@mui/material";

export default function TextSection() {
    return (
    <>
        <Typography
            variant="h6"
            sx={{
            fontSize: { xs: 18, md: 20 },
            textAlign: 'center',
            mt: 2,
            }}
        >
            Make your work easier and organized
        </Typography>
        <Typography
            variant="h6"
            sx={{
            fontSize: { xs: 18, md: 20 },
            textAlign: 'center',
            }}
        >
            with <strong>Tuga's App</strong>
        </Typography>
    </>
)
}