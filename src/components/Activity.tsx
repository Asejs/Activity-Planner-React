import ActivityCard from './ActivityCard'
import { useEffect, useState } from 'react';
import { baseURL } from '../config';
import { ActivityItem } from '../api/activities.api.types';
import { useAllActivities } from '../hooks/useAllActivities';
//import { GroupState, useSolvannApiWithHeaders } from '../API/SolvannAPI';


const Activity: React.FC = () => {
  const allActivities = useAllActivities().data;

  //activities.forEach((item) => item.)

  useEffect(() => {
    console.warn('allActivities', allActivities)
  }, [allActivities])

  return (
    <>
      { allActivities.map((item) => {
        return (
          <ActivityCard />
        )
      }) }
    </>
  );
}

export default Activity;

