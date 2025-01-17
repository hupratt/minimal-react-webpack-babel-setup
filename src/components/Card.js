import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function BasicCard({ name, price }) {
  return (
    <Card
      sx={{ minWidth: 275 }}
      style={{ backgroundColor: '#ffffff94' }}
    >
      <CardContent>
        <Typography
          variant="h5"
          component="div"
          style={{ marginBottom: '12px' }}
        >
          {name}
        </Typography>
        <Typography
          sx={{ fontSize: 14 }}
          color="text.secondary"
          gutterBottom
        >
          {price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
