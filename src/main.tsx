import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ThemeProvider } from './components/shared/theme-provider.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { _routes } from './_routes.tsx'

const BrowserRouter = createBrowserRouter(_routes);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      {/* <App /> */}
      <RouterProvider router={BrowserRouter}/>
    </ThemeProvider>
  </React.StrictMode>,
)
