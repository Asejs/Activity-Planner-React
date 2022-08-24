import ActivityCard from './ActivityCard'
import { useEffect, useState } from 'react';
import { baseURL } from '../config';
import { ActivityItem } from '../api/activities.api.types';
import { useAllActivities } from '../hooks/useAllActivities';


const Activity: React.FC = () => {
  const allActivities = useAllActivities().data;

  useEffect(() => {
    console.warn('allActivities', allActivities)
  }, [allActivities])

  return (
    <>
      {allActivities.map((item) => <ActivityCard activityItem={item} />) }
    </>
  );
}

export default Activity;

