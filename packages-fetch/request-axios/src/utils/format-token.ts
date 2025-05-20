export default function formatToken(token?: null | string): null | string {
  return token ? `Bearer ${token}` : null;
}
