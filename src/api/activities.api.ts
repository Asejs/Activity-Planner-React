import { useEffect, useState } from "react";
import { baseURL } from "../config";
import { ApiResponse, ActivityItem } from "./activities.api.types";


export function useApi<T>(url: string): ApiResponse<T> {
    const [data, setData] = useState<any>();
    const [error, setError] = useState<any>();

    useEffect(() => {
        async function fetchAPI() {
            try {
                const response = await fetch(baseURL + url);
                const json = await response.json();
                setData(json);
            } catch (error) {
                setError(error);
            }
        }
        fetchAPI();
    }, []);

    return { data, error };
}


export async function getAllActivities(): Promise<{data: Promise<ActivityItem[]>; error: any}> {
    try {
      const response = await fetch(baseURL + "activities_get")
      const json = await response.json();
      return {data: json, error: undefined};
    } catch (error) {
      return {data: Promise.resolve([]), error};
    }
}