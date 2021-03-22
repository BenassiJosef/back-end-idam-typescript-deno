export function lengthsMatch(a : Record<string, unknown> = {}, b: Record<string, unknown> = {}, errorMessage:string) : boolean {
  if(Object.keys(a).length !== Object.keys(b).length) throw {message: errorMessage}
  return true 
}