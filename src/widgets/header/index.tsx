import { Box, Heading } from '@chakra-ui/react'
import { CreateTask } from 'features/create-task/ui'
import { FilterTasks } from 'features/tasks-filter'
import { SearchTasks } from 'features/tasks-search'
import styles from './styles.module.scss'

export const Header: React.FC = () => {
  return (
    <Box className={styles.root}>
      <Heading>Forest of tasks</Heading>
      <Box className={styles.right}>
        <SearchTasks />
        <FilterTasks />
        <CreateTask />
      </Box>
    </Box>
  )
}
