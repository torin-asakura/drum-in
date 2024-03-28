export const splitAndSliceFirstItem = (string?: string | null): string[] | null =>
  !string ? null : string?.split('- ').slice(1)
