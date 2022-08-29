import ActivityCard from './ActivityCard'
import { useAllActivities } from '../hooks/useAllActivities';
import { CircularProgress } from '@mui/material';


const Activity: React.FC = () => {
  const { apiResponse: allActivities } = useAllActivities();
  const { isLoading } = useAllActivities();
  const loadingStyle = {
    display: 'flex',
    mr: 'auto',
    ml: 'auto' 
  }

  return (
    <>
      { isLoading ?
        <CircularProgress color="success" sx={ loadingStyle }/>
        : allActivities.data.map((item) => <ActivityCard activityItem={item} key={item.activity_id} /> ) }
    </>
  );
}

export default Activity;