import jwt, { JwtPayload } from "jsonwebtoken"

export const decode = (token: string): string | JwtPayload | null => {
  return jwt.decode(token);
}
const jwtExport = {
  decode,
}
export default jwtExport;