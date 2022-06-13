import { test } from '@japa/runner'

test('assets route is working', async ({ client }) => {
  const response = await client.get('/api/assets')

  response.assertStatus(200)
  response.assertBodyContains([{ "country": "Poland" }])
})
