import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Toaster } from 'react-hot-toast';
import Aos from 'aos';
import 'aos/dist/aos.css';
import AuthContext from 'context/AuthContext';
import Starter from 'components/Starter';
import { BrowserRouter } from 'react-router-dom';
import App from 'App';
import SearchContext from 'context/SearchContext';


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
Aos.init();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    
        <AuthContext>
          <SearchContext>
            <BrowserRouter>
              <Starter>
                <App />
              </Starter>
            </BrowserRouter>
          </SearchContext>
        </AuthContext>
        <Toaster />
    
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);

reportWebVitals();
