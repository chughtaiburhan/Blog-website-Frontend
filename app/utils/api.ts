export const apiBase = 'http://localhost:5000/api'

export async function apiFetch<T>(
  endpoint: string,
  options: {
    method?: string
    body?: any
    token?: boolean
    headers?: Record<string, string>
  } = {}
): Promise<T> {
  const config: RequestInit = {
    method: options.method || 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
  }

  if (options.token) {
    const token = useCookie('token').value
    if (token) {
      ;(config.headers as Record<string, string>)['Authorization'] = `Bearer ${token}`
    }
  }

  if (options.body) config.body = JSON.stringify(options.body)

  const response = await fetch(`${apiBase}${endpoint}`, config)

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`API Error (${response.status}): ${errorText}`)
  }

  return response.json() as Promise<T>
}
