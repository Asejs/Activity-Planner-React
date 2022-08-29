import ActivityCard from './ActivityCard'
import { useAllActivities } from '../hooks/useAllActivities';
import { CircularProgress } from '@mui/material';

const loadingStyle = {
  display: 'flex',
  mr: 'auto',
  ml: 'auto' 
}

const Activity: React.FC = () => {
  const { apiResponse: allActivities, isLoading } = useAllActivities();

  return (
    <>
      { isLoading ?
        <CircularProgress color="success" sx={ loadingStyle }/>
        : allActivities.data.map((item) => <ActivityCard activityItem={item} key={item.activity_id} /> ) }
    </>
  );
}

export default Activity;