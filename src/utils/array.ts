export const randomElement = <T>(array: T[]): T =>
  array[Math.floor(Math.random() * array.length)]

export const times = <T>(n: number, iteratee: (index: number) => T) =>
  Array.from({ length: n }, (_, index) => iteratee(index))
