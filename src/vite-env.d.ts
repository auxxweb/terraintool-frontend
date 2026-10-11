/// <reference types="vite/client" />
/// <reference types="vite-plugin-pwa/client" />

interface ImportMetaEnv {
  /** Base URL for the Express API (include `/api` path), e.g. `http://localhost:5000/api` */
  readonly VITE_API_URL?: string
  readonly VITE_DEV_PROXY_TARGET?: string
  /** Public path the app is served from, e.g. `/terraintool-frontend/` on GitHub Pages. Defaults to `/`. */
  readonly VITE_BASE_PATH?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
