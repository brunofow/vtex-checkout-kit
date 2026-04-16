interface Config {
  method?: string
  body?: Record<any, any>
  headers?: Record<string, string>
}

export const request = async (url: string, config?: Config) => {
  let req: RequestInit = {
    method: config?.method,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ...config?.headers,
    },
  }

  if (config?.body) {
    req.body = JSON.stringify(config.body)
  }

  try {
    const response = await fetch(url, req)

    if (response?.json) {
      return await response.json()
    }

    return response
  } catch (error) {
    console.error('Fetch error: ', { error })
    return error
  }
}
