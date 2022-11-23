import { ReactNode } from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider'

export interface componentRenderOption {
  route?: string
  initialState?: DeepPartial<StateSchema>
}

export function componentRender(component: ReactNode, options: componentRenderOption = {}) {
  const { route = '/', initialState } = options

  return render(
    <StoreProvider initialState={initialState}>
      <MemoryRouter initialEntries={[route]}>
        {component}
      </MemoryRouter>
    </StoreProvider>,

  )
}
