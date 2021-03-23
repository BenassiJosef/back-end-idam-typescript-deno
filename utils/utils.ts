export function equalLength(a : Record<string, unknown> = {}, b: Record<string, unknown> = {}) : boolean {
  if(Object.keys(a).length !== Object.keys(b).length) return false
  return true 
}