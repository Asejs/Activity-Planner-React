import ActivityCard from './ActivityCard'
import { useAllActivities } from '../hooks/useAllActivities';
import { CircularProgress } from '@mui/material';


const Activity: React.FC = () => {
  const allActivities = useAllActivities().apiResponse.data;
  const loading = useAllActivities().loading;
  console.log(loading)

  const loadingStyle = {
    display: 'flex',
    mr: 'auto',
    ml: 'auto' 
  }

  return (
    <>
      { loading || allActivities === undefined ?
        <CircularProgress color="success" sx={ loadingStyle }/>
        : allActivities.map((item) => <ActivityCard activityItem={item} key={item.activity_id} /> ) }
    </>
  );
}

export default Activity;