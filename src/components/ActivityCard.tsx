import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import defaultimg from './default.png'
import { Button } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ActivityCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
        title="Aktivitetstittel"
        subheader="Dato"
      />
      <CardMedia
        component="img"
        height="290"
        image={ defaultimg }
        alt="activityalt"
      />
      <CardContent>
        <Typography component={'span'} variant="body2" color="text.secondary">

        <h2>Activity location</h2>
        <h2>Activity description</h2>
          
        {/* { activities.map((activity: Activity) => (
          <>
            <h2>Sted: { activity.location }</h2>
            <h2>Deltakere: 0</h2>
            <h2>Beskrivelse: { activity.description }</h2>
          </>
        ))} */}

        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button variant="contained" sx={{ backgroundColor: 'darkgrey'}}><PersonAddIcon sx={{ mr: '10px', ml: '-5px'}}/> Meld meg på</Button>
        <IconButton aria-label="legg til favoritt">
          <FavoriteIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography component={'span'} paragraph>
            Ekstra informasjon / Beskrivelse
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
