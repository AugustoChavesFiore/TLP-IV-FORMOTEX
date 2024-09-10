
import './App.css'
import { Button } from './components/shadcn/ui/button'

function App() {

  return (
    <>
      <Button
        onClick={() => {
          console.log('Button clicked')
        }}
        variant={'destructive'}
      >Click me</Button>

    </>

  )
}

export default App
