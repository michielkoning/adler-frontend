import type { H3Event } from 'h3'

export const fetchData = async (url: string, event: H3Event) => {
  return await $fetch(url, {
    // headers: {
    //   Authorization: `Basic ${key}`,
    // },
  }).catch(err => console.log(err))
}
