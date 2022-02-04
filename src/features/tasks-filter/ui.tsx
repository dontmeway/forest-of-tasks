import {
  Button,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Radio,
  RadioGroup,
  Stack,
} from '@chakra-ui/react'
import { filterList } from './lib'
import styles from './styles.module.scss'

export const FilterTasks: React.FC = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button colorScheme="telegram" className={styles.root}>
          Filter
        </Button>
      </PopoverTrigger>
      <PopoverContent
        boxShadow="-2px -1px 19px 4px rgba(34, 60, 80, 0.2)"
        w="200px"
      >
        <PopoverBody>
          <RadioGroup>
            <Stack>
              {filterList.map((filter) => (
                <Radio
                  variant="solid"
                  p="5px"
                  value={filter.completed}
                  key={filter.id}
                >
                  {filter.label}
                </Radio>
              ))}
            </Stack>
          </RadioGroup>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}
