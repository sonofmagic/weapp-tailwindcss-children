import { variants, each, createVariants } from '@/variants'

describe('[Default]', () => {
  test('variants', () => {
    expect(variants).toMatchSnapshot()
  })

  test('callback', () => {
    const arr: any[] = []
    each(variants, (x) => {
      arr.push(x)
    })
    expect(arr).toMatchSnapshot()
  })

  test('createVariants', () => {
    expect(
      createVariants({
        fallbackElements: ['view']
      })
    ).toMatchSnapshot()
  })
})
