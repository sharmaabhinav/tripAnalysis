export const SEARCH = 'SEARCH'

export function search (value) {
  return {
    type: SEARCH,
    data: {search: value}
  }
}