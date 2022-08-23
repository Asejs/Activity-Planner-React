import ActivityCard from './ActivityCard'
import { useEffect, useState } from 'react';
import { baseURL } from '../config';
import { ActivityItem } from '../api/activities.api.types';

const Activity: React.FC = () => {

  const [status, setStatus] = useState<number>(0);
  const [statusText, setStatusText] = useState<string>('');
  const [data, setData] = useState<any>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);

  const [activities, setActivities] = useState<ActivityItem[]>([]);

  useEffect(() => {
    setLoading(true);
    getActivities();
  }, []);

  const getActivities = async () => {
    try {
      const response = await fetch(baseURL + "activities_get");
      //.then((response) => response.json());
      const json = await response.json();
      setStatus(response.status);
      setStatusText(response.statusText);
      setActivities(json)
      console.log("activities", json)
    } catch (error) {
      setError(error);
      console.log("error")
    }
    setLoading(false);
  }

  //activities.forEach((item) => item.)

  return (
    <>
      <ActivityCard />
      <ActivityCard />
    </>
  );
}

export default Activity;

