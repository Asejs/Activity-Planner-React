
export type ApiResponse<T> = {
    data: T | undefined;
    error: any;
};

export interface ActivityItem {
    username: string,
    title: string,
    date: string,
    location: string,
    description: string
};
