import { AxiosPromise } from "axios"
import { Task, TaskResponse } from "./models"
import { instance } from "./base"

export type GetTasksParams = {
    completed?: string,
    search?: string
}

export const getTasks = (params?: GetTasksParams): AxiosPromise<TaskResponse[]> => {
    return instance.get('/tasks', { params })
}

export type CreateTasksParams = Omit<Task, "id">

export const createTask = (params: CreateTasksParams): AxiosPromise<any> => {
    return instance.post('/tasks', params)
}

export const updateTask = (params: Task): AxiosPromise<any> => {
    return instance.put(`/tasks/${params.id}`, params)
}

export type DeleteTaskParams = {
    id: number
}

export const deleteTask = (params: DeleteTaskParams): AxiosPromise<any> => {
    return instance.delete(`/tasks/${params.id}`, { data: params.id })
}
