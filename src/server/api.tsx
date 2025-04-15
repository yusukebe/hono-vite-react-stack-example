import { Hono } from 'hono'
import { z } from 'zod'
import { zValidator } from '@hono/zod-validator'

const app = new Hono()

const routes = app.get(
  '/',
  zValidator(
    'query',
    z.object({
      name: z.string().optional()
    })
  ),
  (c) => {
    const { name } = c.req.valid('query')
    return c.json({ message: `Hello from API${name ? `, ${name}` : ''}` })
  }
)

export default routes
export type AppType = typeof routes
