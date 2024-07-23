/// <reference types="vite/types/importMeta.d.ts" />
interface ImportMetaEnv {
  readonly VITE_GOOGLE_FONTS_API_KEY: string;
  readonly VITE_SUPABASE_ANON_KEY: string;
  readonly VITE_SUPABASE_URL: string;

}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}