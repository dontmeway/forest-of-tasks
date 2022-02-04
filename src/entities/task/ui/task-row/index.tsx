import { Box, Button, Checkbox, Input } from '@chakra-ui/react'
import { taskModel } from 'entities/task'
import { Task } from 'shared/api'

export const TaskRow: React.FC<Task> = (props) => {
  return (
    <Box
      borderRadius="5px"
      boxShadow="-2px -1px 19px -6px rgba(34, 60, 80, 0.2)"
      w="100%"
      p="12px 25px"
      d="flex"
      alignItems="center"
      justifyContent="space-between"
      _notLast={{ marginBottom: '10px' }}
    >
      <Box d="flex" alignItems="center">
        <Checkbox
          onChange={(e) =>
            taskModel.updateTaskFx({
              ...props,
              completed: e.currentTarget.checked,
            })
          }
          isChecked={props.completed}
          size="lg"
        />
        <Input
          w="350px"
          ml="10px"
          outline="none"
          border="none"
          _focus={{ border: '1px solid #0088cc' }}
          focusBorderColor="blue"
          defaultValue={props.title}
          onBlur={(e) => {
            let t = e.currentTarget.value
            if (t.trim() === props.title) {
              return
            }
            taskModel.updateTaskFx({ ...props, title: e.currentTarget.value })
          }}
        />
      </Box>
      <Button onClick={() => taskModel.deleteTask(props.id)} colorScheme="red">
        Delete
      </Button>
    </Box>
  )
}
