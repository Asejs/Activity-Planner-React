import { baseURL } from "../config";
import { ActivityItem } from "./activities.api.types";

export async function getAllActivities(): Promise<{data: ActivityItem[]; error: any}> {
    try {
      const response = await fetch(baseURL + "activities_get")
      const json = await response.json();
      return {data: json, error: undefined};
    } catch (error) {
      return {data: [], error};
    }
}
