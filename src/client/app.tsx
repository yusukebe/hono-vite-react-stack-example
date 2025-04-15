import { use, Suspense } from 'react'
import { hc } from 'hono/client'
import type { InferResponseType } from 'hono/client'
import type { AppType } from '../server/api'

const client = hc<AppType>('/api')

const fetchData = async () => {
  const data = await client.index.$get({ query: { name: 'Hono' } })
  return data.json()
}

const Component = ({ promise }: { promise: Promise<InferResponseType<typeof client.index.$get>> }) => {
  const data = use(promise)
  return <h2 className="text-2xl">{data.message}</h2>
}

const App = () => {
  return (
    <Suspense fallback={'loading...'}>
      <Component promise={fetchData()} />
    </Suspense>
  )
}

export default App
