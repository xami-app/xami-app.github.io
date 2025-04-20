import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App'
import { QueryClient, QueryClientProvider } from 'react-query'
import { name, version } from "../package.json";

const queryClient = new QueryClient();

console.info(
  `%cThis page is running %c${name} %cv${version} %c[${import.meta.env.MODE}]`,
  'color: #ffffff;',
  'color: #AB47BC; font-weight: 700;',
  'color: #AB47BC; font-weight: 300;',
  'color: #9E9E9E; font-style: italic;'
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>
)