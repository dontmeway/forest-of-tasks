import { createStandaloneToast } from "@chakra-ui/react";
import { combine, createEffect, createEvent, createStore } from "effector";
import { Task, tasksApi } from "shared/api";
import { normalizr } from "./lib";

const toast = createStandaloneToast()
const defaultToastParams = {
    isClosable: true,
    duration: 5000,
}

export const getTasksFx = createEffect(async(params?: tasksApi.tasks.GetTasksParams) => {
    return tasksApi.tasks.getTasks(params)
})

const deleteTaskFx = createEffect(async(params: tasksApi.tasks.DeleteTaskParams) => {
    return tasksApi.tasks.deleteTask(params)
})
export const deleteTask = deleteTaskFx.prepend<number>((id) => ({ id }))

export const updateTaskFx = createEffect(async(params: Task) => {
    return tasksApi.tasks.updateTask(params)
})

export const $tasks = createStore<Record<number, Task>>({})
export const $tasksList = combine($tasks, (tasks) => Object.values(tasks))

$tasks.on(getTasksFx.doneData, (_, payload) => {
    return normalizr(payload.data)
})

export const change = createEvent<string>()
export const $search = createStore('')

$search.on(change, (_, payload) => payload)


export const $queryConfig = combine($search, (search) => ({search}))

deleteTaskFx.done.watch(() => {
    toast({
        ...defaultToastParams,
        status: 'success',
        title: 'Deleted'
    })
})

deleteTaskFx.fail.watch(() => {
    toast({
        ...defaultToastParams,
        status: 'error',
        title: 'Error occured'
    })
})

deleteTaskFx.finally.watch(() => {
    getTasksFx()
})


updateTaskFx.done.watch(() => {
    toast({
        ...defaultToastParams,
        status: 'success',
        title: 'Saved'
    })
})
updateTaskFx.finally.watch(() => {
    getTasksFx()
})
