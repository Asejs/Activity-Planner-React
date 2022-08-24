import ActivityCard from './ActivityCard'
import { useEffect } from 'react';
import { useAllActivities } from '../hooks/useAllActivities';


const Activity: React.FC = () => {
  const allActivities = useAllActivities().data;

  useEffect(() => {
    console.warn('allActivities', allActivities)
  }, [allActivities])

  return (
    <>
      {allActivities.map((item) =>
        <ActivityCard activityItem={item} key={item.activity_id} />
      )}
    </>
  );
}

export default Activity;

