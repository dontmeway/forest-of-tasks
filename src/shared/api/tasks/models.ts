export type Task = {
    title: string,
    id: number,
    completed: boolean,
    parent_id: null | number,
}

export type TaskResponse = {
    completed: 0 | 1
} & Omit<Task, 'completed'>
