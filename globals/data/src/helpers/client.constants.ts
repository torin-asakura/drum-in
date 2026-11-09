export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__'
export const IS_SERVER = typeof window === 'undefined'
export const WP_URI =
  (IS_SERVER && process.env.WORDPRESS_GRAPHQL_URL) ||
  'https://wp.druminstructor.online/graphql'
