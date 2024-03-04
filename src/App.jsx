import Header from './components/Header'
import Meme from './components/Meme'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Header />
        <Meme />
      </div>
    </QueryClientProvider>
  )
}

export default App
