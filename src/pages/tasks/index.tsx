import { Box, Container, Heading } from '@chakra-ui/react'
import { useStore } from 'effector-react'
import { TaskRow } from 'entities/task'
import { taskModel } from 'entities/task'
import { useEffect } from 'react'
import { Header } from 'widgets/header'

export const Tasks: React.FC = () => {
  const tasks = useStore(taskModel.$tasksList)
  const queryConfig = useStore(taskModel.$queryConfig)

  useEffect(() => {
    taskModel.getTasksFx(queryConfig)
  }, [queryConfig])

  return (
    <Box>
      <Header />
      <Container
        borderRadius="15px"
        p="15px 20px"
        maxW="container.xl"
        boxShadow="-2px -1px 19px 4px rgba(34, 60, 80, 0.2);"
        h="100%"
        overflowY="auto"
      >
        <Heading textAlign="center" mb="20px" as="h3">
          Tasks
        </Heading>
        <Box w="100%">
          {tasks.map((task) => (
            <TaskRow key={task.id} {...task} />
          ))}
        </Box>
      </Container>
    </Box>
  )
}
