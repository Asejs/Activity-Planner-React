import { useEffect, useState } from "react";
import { ActivityItem } from "../api/activities.api.types";
import { getAllActivities } from "../api/activities.api";

export function useAllActivities() {
    const [apiResponse, setApiResponse] = useState({ data: [] as ActivityItem[], error: undefined});
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        setIsLoading(true);
        async function fetchAPI() {
            const response = await getAllActivities();
            setApiResponse(response);
            setIsLoading(false)
        }
        setTimeout( () => { fetchAPI(); }, 2000)
    }, []);

    return { apiResponse, isLoading };
}
