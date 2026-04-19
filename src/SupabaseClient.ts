import { createClient } from '@supabase/supabase-js'

// You will get these keys from your Supabase Dashboard settings
const supabaseUrl = 'https://zxikatpbmbnesaqmmgvy.supabase.co'
const supabaseAnonKey = 'sb_publishable_s3eVD1BVlYl35ay3pYQbIQ_biifv2nM'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)