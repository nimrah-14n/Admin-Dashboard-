export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-02-08'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)
export const token = assertValue(
  "skg9apLMQ0ToEMAP2K4CoNj3dYMswZtyZdzZPoouykx1RPPGG0kNA25lWe5QDyJoKRVec9ZMYGpw8byvp5N0YGmeCmB2DLJTWrF4MJnbAX0S9EEDue9cRcHzurxC6la4Zi47K8VXGI1FzNDdPePqK9ychw1uwsR3WGAJCYKCOz7W2KIoKwbS",
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
