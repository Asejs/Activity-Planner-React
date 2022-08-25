import { useEffect, useState } from "react";
import { baseURL } from "../config";
import { ApiResponse, ActivityItem } from "../api/activities.api.types";
import { getAllActivities } from "../api/activities.api";

export function useAllActivities() {
    const [apiResponse, setApiResponse] = useState({ data: [] as ActivityItem[], error: undefined });

    useEffect(() => {
        async function fetchAPI() {
            const response = await getAllActivities();
            setApiResponse(response);
        }
        fetchAPI();
    }, []);

    return apiResponse;
}
