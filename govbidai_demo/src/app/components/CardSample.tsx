import * as React from 'react';
import  {Card} from '@mui/material';

export default function CardSample({children}: {children: React.ReactNode}) {
  return (
    <Card sx = {{color: 'success.dark',
    display: 'inline',
    fontWeight: 'bold',
    mx: 0.5,
    fontSize: 14,
    p: 3}}>
      {children}
    </Card>
  );
}