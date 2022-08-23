import ActivityCard from './ActivityCard'
import { useEffect, useState } from 'react';


const Activity: React.FC = () => {

  const baseURL = "http://127.0.0.1:5000/";

  const [status, setStatus] = useState<number>(0);
  const [statusText, setStatusText] = useState<string>('');
  const [data, setData] = useState<any>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);

  interface Activity {
    username: string,
    title: string,
    date: string,
    location: string,
    description: string
  }

  const [activities, setActivities] = useState([]);

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
      console.log("activities", activities)
    } catch (error) {
      setError(error);
      console.log("error")
    }
    setLoading(false);
  }

  return (
    <>
      <ActivityCard />
      <ActivityCard />
    </>
  );
}

export default Activity;

