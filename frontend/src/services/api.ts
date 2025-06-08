const BASE_URL = "http://localhost:8000";

type ApiResponse<T> = Promise<{
  data: T;
  status: number;
  ok: boolean;
}>;

/**
 * Generic API service function that handles all HTTP requests
 * @param endpoint - The API endpoint to call
 * @param init - Request options including method, body, headers, etc.
 * @returns Promise with the response data and status
 */
export const api = async <T>(
  endpoint: string,
  init?: RequestInit
): ApiResponse<T> => {
  const url = `${BASE_URL}${endpoint}`;
  const config: RequestInit = {
    headers: {
      "Content-Type": "application/json",
      ...init?.headers,
    },
    ...init,
  };

  const response = await fetch(url, config);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Request failed");
  }

  return {
    data,
    status: response.status,
    ok: response.ok,
  };
};
