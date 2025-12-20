export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  return await $fetch(body.page, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams(body).toString(),
  })
})
