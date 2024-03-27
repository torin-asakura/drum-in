export const formatContent = (content: string | undefined | null): string | undefined =>
  content?.replace(/<[^>]+>/g, '')
