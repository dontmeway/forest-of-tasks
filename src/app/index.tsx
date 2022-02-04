import { Routing } from 'pages'
import './index.scss'
import { ChakraProvider } from '@chakra-ui/react'
function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Routing />
      </div>
    </ChakraProvider>
  )
}

export default App
