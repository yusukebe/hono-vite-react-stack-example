import { Hono } from 'hono'
import { renderer } from './renderer'
import api from './api'

const app = new Hono()

app.route('/api', api)

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
