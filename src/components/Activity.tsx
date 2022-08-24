import ActivityCard from './ActivityCard'
import { useEffect, useState } from 'react';
import { baseURL } from '../config';
import { ActivityItem } from '../api/activities.api.types';
//import { GroupState, useSolvannApiWithHeaders } from '../API/SolvannAPI';


const Activity: React.FC = () => {
  // const [data, setData] = useState<any>();
  // const [error, setError] = useState<any>();

  // const [activities, setActivities] = useState<ActivityItem[]>([]);

  // useEffect(() => {
  //   getActivities();
  // }, []);

  // const getActivities = async () => {
  //   try {
  //     const response = await fetch(baseURL + "activities_get");
  //     //.then((response) => response.json());
  //     const json = await response.json();
  //     setActivities(json)
  //     console.log("activities", json)
  //   } catch (error) {
  //     setError(error);
  //     console.log("error")
  //   }
  // }

  //activities.forEach((item) => item.)

  return (
    <>
      <ActivityCard />
      <ActivityCard />
    </>
  );
}

export default Activity;

