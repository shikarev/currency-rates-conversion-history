import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { StoreProvider } from 'app/providers/StoreProvider'
import { ErrorBoundary } from 'app/providers/ErrorBoundary'
import { ThemeProvider } from '@mui/material'
import { theme } from 'app/styles/theme'
import App from './app/App'
import 'app/styles/index.scss'

render(
  <StoreProvider>
    <BrowserRouter>
      <ErrorBoundary>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </StoreProvider>,
  document.getElementById('root'),
)
