import { variants, each } from '@/variants'

describe('[Default]', () => {
  test('variants', () => {
    console.log(variants)
    expect(variants).toBe('variants')
  })

  test('callback', () => {
    const arr: any[] = []
    each((x) => {
      arr.push(x)
    })
    expect(arr).toBe([])
  })
})
