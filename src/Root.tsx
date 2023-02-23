import { ComponentType, StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { RecoilRoot } from 'recoil';

import { RequiredAuthProvider } from '@propelauth/react';

import IsLoading from '@/components/IsLoading';
import { SoftUIControllerProvider } from '@/context';
import ThemeProvider from '@/theme/Provider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

function render(App: ComponentType) {
  const queryClient = new QueryClient();


  root.render(
    <StrictMode>
      <RecoilRoot>
        <HelmetProvider>
          <ThemeProvider>
            <SoftUIControllerProvider>

                <QueryClientProvider client={queryClient}>
                <App />
                <ReactQueryDevtools initialIsOpen={true}/>
                </QueryClientProvider>
            </SoftUIControllerProvider>
          </ThemeProvider>
        </HelmetProvider>
      </RecoilRoot>
    </StrictMode>,
  );
}

export default render;
