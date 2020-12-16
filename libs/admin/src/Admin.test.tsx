import React from 'react'
import { act, render, cleanup } from '@testing-library/react'
import { Admin } from './Admin'



describe('Admin', () => {
  afterEach(cleanup)

  it('should have passing test', () => {
    expect(true).toBe(true)
  })

  it('can instantiate a react component', () => {
    const Comp = () => <div>test</div>
    const {container} = render(<Comp />)
    expect(container).toBeDefined()
  })

  it('can instantiate RwAdmin', async () => {
    const dataProviderMock = {
      getList: jest.fn().mockResolvedValue({data: [], total: 0}),
      getOne: jest.fn().mockResolvedValue({}),
      getMany: jest.fn(),
      getManyReference: jest.fn(),
      update: jest.fn(),
      updateMany: jest.fn(),
      create: jest.fn(),
      delete: jest.fn(),
      deleteMany: jest.fn()  
    }
    

    let Comp      // the rendered React component

    await act( async () => {
      const {container} = await render(
          <Admin dataProvider={dataProviderMock}/>
      )
      Comp = container
      //return Promise.resolve(Comp)

    })
    /*let container
    act(() => {
      let container = render(<RwAdmin />)
    })*/
    expect(Comp).toBeDefined()
  })

})