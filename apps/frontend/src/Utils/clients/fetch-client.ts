function isHttpSuccess(status: number) {
  return status >= 200 && status <= 299;
}

function isHttpUnauthorized(status: number) {
  return status === 401;
}

export interface FetchClientConfig extends RequestInit {
  baseURL: string;
  url: string;
  data?: unknown;
  token?: string;
  headers?: HeadersInit;
}

export async function fetchClient<TEntity>({
  baseURL,
  url,
  data,
  token,
  headers: customHeaders,
  ...customConfig
}: FetchClientConfig): Promise<TEntity | undefined> {
  const config = {
    body: data ? JSON.stringify(data) : undefined,
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
      'Content-Type': data ? 'application/json' : '',
      ...customHeaders,
    },
    ...customConfig,
  };

  try {
    const response = await fetch(`${baseURL}${url}`, config);

    if (isHttpUnauthorized(response.status)) {
      return Promise.reject(response);
    }

    if (isHttpSuccess(response.status)) {
      return response.json();
    } else {
      return Promise.reject(response);
    }
  } catch (error) {
    if (error instanceof Error) return Promise.reject(error?.message);
  }
}
