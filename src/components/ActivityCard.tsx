import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import defaultimg from './default.png'
import { Button } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { getAllActivities } from '../api/activities.api';
import { ActivityItem, ApiResponse } from '../api/activities.api.types';
import { useEffect, useState } from 'react';


export default function ActivityCard() {


  return (
    <Card sx={{ mb: '30px'}}>
      <CardHeader
        avatar={
          <Avatar aria-label="activity">
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Activity title"
        subheader="Date"
      />
      <CardMedia
        component="img"
        height="290"
        image={ defaultimg }
        alt="activityalt"
      />
      <CardContent>
        <Typography component={'span'} variant="body2" color="text.secondary">
                
        {/* { activityList.map((activity: ActivityItem) => (
          <>
            { activity.username }
          </>
        ))} */}



        {/* <h2>Sted: { activity.location }</h2>
        <h2>Deltakere: 0</h2>
        <h2>Beskrivelse: { activity.description }</h2> */}

        {/* { activities.forEach((item) => item.description) } */}


        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button variant="contained" sx={{ backgroundColor: 'darkgrey'}}><PersonAddIcon sx={{ mr: '10px', ml: '-5px'}}/> Meld meg på</Button>
        <IconButton aria-label="legg til favoritt">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
