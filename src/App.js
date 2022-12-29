import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import Home from './Componts/Home';

function App() {
  const queryClient = new QueryClient()
  return (
   <div>
   <QueryClientProvider client={queryClient}>
      <Home></Home>
    </QueryClientProvider>
   </div>
  );
}

export default App;
