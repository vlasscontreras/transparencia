import dayjs from 'dayjs'

export const format = (date: string, format: string) => {
  return dayjs(date).format(format)
}
