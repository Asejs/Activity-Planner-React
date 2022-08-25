import ActivityCard from './ActivityCard'
import { useAllActivities } from '../hooks/useAllActivities';


const Activity: React.FC = () => {
  const allActivities = useAllActivities().data;

  return (
    <>
      {allActivities.map((item) =>
        <ActivityCard activityItem={item} key={item.activity_id} />
      )}
    </>
  );
}

export default Activity;