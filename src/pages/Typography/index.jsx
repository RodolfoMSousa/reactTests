import { Stack, Typography } from "@mui/material";
import React from "react";

const text = () => {
    return (
        <Stack spacing={2}>
            <Typography variant="h1" sx={{color: "customCol.main"}}>texto h1</Typography>
            <Typography variant="h2" color="primary.100">texto h2</Typography>
            <Typography variant="h3">texto h3</Typography>
            <Typography variant="h4">texto h4</Typography>
            <Typography variant="h5">texto h5</Typography>
            <Typography variant="h6">texto h6</Typography>
        </Stack>
    );
}

export default text;