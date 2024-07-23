import { createClient } from '@supabase/supabase-js'
import { Startup } from './types'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string

export const supabase = createClient(supabaseUrl, supabaseAnonKey, { db: { schema: 'public' } })

export async function getRandomStartup(): Promise<Startup> {
  const { data, error } = await supabase.rpc('get_random_startup')
  if (error) throw error
  return data
}

export async function upvoteStartup(uuid: string): Promise<true> {
  const { data, error } = await supabase.rpc('upvote_startup', uuid)
  console.log('data', data)
  if (error) throw error
  return true
}

export async function downvoteStartup(uuid: string): Promise<true> {
  const { data, error } = await supabase.rpc('downvote_startup', uuid)
  console.log('data', data)
  if (error) throw error
  return true
}