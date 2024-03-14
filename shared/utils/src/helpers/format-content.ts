export const formatContent = (content:string | undefined):string|undefined => content?.replace(/<[^>]+>/g, '')
