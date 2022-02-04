import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Modal,
  ModalContent,
  ModalOverlay,
} from '@chakra-ui/react'
import { useStore } from 'effector-react'
import { createTaskModel } from '../model'

export const CreateTask = () => {
  const open = useStore(createTaskModel.$open)
  const title = useStore(createTaskModel.$title)
  const completed = useStore(createTaskModel.$completed)

  return (
    <>
      <Button
        onClick={() => createTaskModel.onOpen()}
        colorScheme="teal"
        ml="20px"
        w="250px"
        variant="solid"
      >
        Create Task
      </Button>
      <Modal
        isOpen={open}
        onClose={() => createTaskModel.onClose()}
        isCentered
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent
          d="flex"
          flexDirection="column"
          minH="500px"
          w="450px"
          p="30px 25px"
        >
          <Heading mb="40px" textAlign="center" as="h6">
            Creating Task
          </Heading>
          <Box d="flex" flexDirection="column" justifyContent="center" w="100%">
            <FormControl mb="20px" isRequired>
              <FormLabel htmlFor="title">Title</FormLabel>
              <Input
                value={title}
                onChange={(event) =>
                  createTaskModel.onChange(event.currentTarget.value)
                }
                id="title"
              />
            </FormControl>
            <FormControl isRequired>
              <Checkbox
                isChecked={completed}
                onChange={createTaskModel.onToggle}
                size="lg"
              >
                Fulfilled
              </Checkbox>
            </FormControl>
          </Box>
          <Box
            flex="2"
            d="flex"
            alignItems="flex-end"
            justifyContent="space-around"
          >
            <Button onClick={() => createTaskModel.onClose()} w="150px">
              Cancel
            </Button>
            <Button
              onClick={() => createTaskModel.onCreate({ title, completed })}
              colorScheme={'teal'}
              w="150px"
            >
              Submit
            </Button>
          </Box>
        </ModalContent>
      </Modal>
    </>
  )
}
