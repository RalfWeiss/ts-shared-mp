import {fn, FnProps} from './fn'

describe('fn', () => {
  it('returns input', () => {
    const param: FnProps = { param: "input"}
    expect(fn(param)).toEqual("input")
  })
})