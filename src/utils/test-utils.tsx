import { ReactElement } from 'react'
import { RecoilRoot } from 'recoil'

import { render, RenderResult } from '@testing-library/react'

const customRender = (children: ReactElement): RenderResult =>
  render(<RecoilRoot>{children}</RecoilRoot>)

export * from '@testing-library/react'
export { customRender as render }
