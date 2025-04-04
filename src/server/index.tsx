import { Hono } from 'hono'
import { renderer } from './renderer'

const app = new Hono()

app.get('/api', (c) => {
  return c.json({ message: 'Hello from API' })
})

app.use(renderer)

app.get('/', (c) => {
  return c.render(
    <>
      <h1 className="text-3xl font-bold underline">Hello from SSR</h1>
      <div id="root"></div>
    </>
  )
})

export default app
