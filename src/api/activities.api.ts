import { baseURL } from "../config";
import { ActivityItem } from "./activities.api.types";

export async function getAllActivities(): Promise<{data: Promise<ActivityItem[]>; error: any}> {
    try {
      const response = await fetch(baseURL + "activities_get");
      //.then((response) => response.json());
      // return response.json();
      return {data: response.json(), error: undefined};
      // console.log("activities", json)
    } catch (error) {
      return {data: Promise.resolve([]), error};
    }
}
