
export type ApiResponse<T> = {
    data: T | undefined;
    error: any;
};

export interface ActivityItem {
    activity_id: number,
    username: string,
    title: string,
    date: string,
    location: string,
    description: string,
    image: string,
};
