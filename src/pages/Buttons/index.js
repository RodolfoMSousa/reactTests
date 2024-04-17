import { Button } from '@mui/material';
import React from 'react'

const Buttons = () => {
    return (
        <>
            <Button variant='contained' 
                sx={{
                    color: "primary.100", 
                    width: "400px", 
                    p: "8px"
                }}
            >Button Contained</Button>
            <Button variant='outlined'
                sx={{color: "customCol.main"}}
            >Button Contained</Button>
            <Button variant='contained'>Button Contained</Button>
            <Button variant='contained'>Button Contained</Button>
        </>
    );
}

export default Buttons;