import { Box } from "@mui/material";
import image from '../../assets/undraw_unlock_m0yr.svg';

export default function ImageSection() {
    return (
    <Box
    sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        }}>
        <img
                src={image}
                alt="Image"
                style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '100%',
                    objectFit: 'contain',
                }}
                />
    </Box>
)
}