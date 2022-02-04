import { createStandaloneToast } from "@chakra-ui/react";
import { createEffect, createEvent, createStore } from "effector";
import { taskModel } from "entities/task";
import { tasksApi } from "shared/api";

const toast = createStandaloneToast()

export const onOpen = createEvent('open modal') 
export const onClose = createEvent('close modal') 

export const $open = createStore(false)
$open.on(onOpen, () => true).on(onClose, () => false)

const createTaskFx = createEffect(async(params: tasksApi.tasks.CreateTasksParams) => {
    return tasksApi.tasks.createTask(params)
})
const reset = createEvent()
export const onChange = createEvent<string>()
export const $title = createStore('')

$title.on(onChange, (_, s) => s).reset(reset)

export const onToggle = createEvent<React.ChangeEvent<HTMLInputElement>>()
export const $completed = createStore(false)

$completed.on(onToggle, (_, event) => event.currentTarget.checked).reset(reset)

export const onCreate = createTaskFx.prepend<{completed: boolean, title: string}>((dto) => {

    return {
        ...dto,
        parent_id: null,
    }
})

createTaskFx.fail.watch(() => {
    toast({
        status: 'error',
        isClosable: true,
        duration: 5000,
        title: 'Error occured while creating'
    })
})

createTaskFx.done.watch(() => {
    toast({
        status: 'success',
        isClosable: true,
        duration: 5000,
        title: 'Success!'
    })   
})

createTaskFx.finally.watch(() => {
    taskModel.getTasksFx()
    onClose()
    reset()
})
