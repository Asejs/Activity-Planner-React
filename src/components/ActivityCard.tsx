import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PlaceIcon from '@mui/icons-material/Place';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Button, Divider } from '@mui/material';
import { ActivityItem } from '../api/activities.api.types';
import { Box } from '@mui/system';


interface ActivityCardProps {
  activityItem: ActivityItem;
}

const activityCardStyle = {
  width: '900px',
  ml: 'auto',
  mr: 'auto',
  mb: '30px'
}

const joinActivityButtonStyle = {
  display: 'flex',
  justifyContent: 'flex-end',
  mt: '-60px',
  mb: '40px' 
}

const iconAlignment = {
  mr: '5px',
  verticalAlign: 'middle'
}

export default function ActivityCard(props: ActivityCardProps) {
  const { activityItem } = props;

  return (
    <Card sx={ activityCardStyle }>
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
        title={activityItem.username}
      />
      <CardMedia
        component="img"
        height="390"
        src={`assets/${activityItem.image}`}
        alt="activity image"
      />
      <CardContent>
        <Typography component={'span'} color="text.secondary">

          <Box sx={{ mb: '20px' }}>
            <p><CalendarMonthIcon sx={ iconAlignment } /> Dato: { activityItem.date }</p>
            <p><PlaceIcon sx={ iconAlignment } /> Sted: { activityItem.location }</p>
            <p><PeopleAltIcon sx={ iconAlignment } /> Deltakere: 0</p>

            <Box sx={ joinActivityButtonStyle } >
              <Button variant="contained" sx={{ backgroundColor: 'darkgrey'}}>
                <PersonAddIcon sx={ iconAlignment }/> Meld meg på
              </Button>
            </Box>
          </Box>

          <Divider />

          <Box sx={{ mt: '30px', mb: '20px' }}>
            <h2 className="show-white-space">{ activityItem.description }</h2>
          </Box>

        </Typography>
      </CardContent>
    </Card>
  );
}
