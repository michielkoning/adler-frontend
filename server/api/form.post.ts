export default defineCachedEventHandler(async (event) => {
  const body = await readBody(event)

  return await $fetch(body.page, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams(body).toString(),
  })
}, {
  maxAge: 60 * 60,
})
