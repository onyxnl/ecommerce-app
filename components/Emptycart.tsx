"use client";
import Typography from '@mui/material/Typography';
import Link from 'next/link'

import Button from '@mui/material/Button';


function Emptycart() {
  

    return (
      <>
        <Typography variant="h4" sx={{margin:'3rem'}}>There is no item.</Typography>
        <Link href="/"><Button variant="contained">Go to Shopping</Button></Link>
      </>
    )
}
export default Emptycart;