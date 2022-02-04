import { Task, TaskResponse } from "shared/api";

export const normalizr = (array: TaskResponse[]): Record<number, Task> => {
    return array.reduce((acc: Record<number, Task>, curr) => ({...acc, [curr.id]: {...curr, completed: Boolean(curr.completed)}}) , {})
}
