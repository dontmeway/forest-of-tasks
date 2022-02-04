import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg'
import { useStore } from 'effector-react'
import { taskModel } from 'entities/task'

export const SearchTasks: React.FC = () => {
  const search = useStore(taskModel.$search)

  return (
    <InputGroup>
      <InputLeftElement children={<SearchIcon />} />
      <Input
        value={search}
        onChange={(e) => taskModel.change(e.currentTarget.value)}
        placeholder="Search..."
        variant="filled"
      />
    </InputGroup>
  )
}
