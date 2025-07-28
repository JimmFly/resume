/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_DEV_PORT: string
  readonly VITE_CONTACT_EMAIL: string
  readonly VITE_GA_TRACKING_ID?: string
  readonly VITE_GITHUB_URL?: string
  readonly VITE_LINKEDIN_URL?: string
  readonly VITE_TWITTER_URL?: string
  readonly VITE_API_KEY?: string
  readonly VITE_OPENAI_API_KEY?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}