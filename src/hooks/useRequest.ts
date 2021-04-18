import { useState, useEffect } from 'react'

interface useRequestResult<Result> {
  loading: boolean
  result: Result
  error: string | null
}

interface Request<Result> {
  status: number
  error: string | null
  data: Result
}

const useRequest = <Result>(request: () => Promise<Request<Result>>): useRequestResult<Result> => {
  const [loading, setLoading] = useState(true)
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const makeRequest = async (): Promise<void> => {
      try {
        const resultRequest = await request()
        if (resultRequest.status !== 200 && resultRequest.error) {
          throw resultRequest.error
        }
        setResult(resultRequest.data)
        setLoading(false)
      } catch (err) {
        setError(err.message)
        setLoading(false)
      }
    }
    makeRequest()
  }, [])
  return { loading, error, result }
}

export default useRequest
