import { login } from "./actions";

export default async function LoginPage({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  const params = await searchParams;
  return <main className="shell"><section className="card"><div className="muted">ClassCapture · Private dashboard</div><h1>Sign in</h1><p>Use your authorized account to access the coverage dashboard.</p>{params.error ? <p className="error">Unable to sign in. Check your email and password.</p> : null}<form action={login}><div className="field"><label htmlFor="email">Email</label><input id="email" name="email" type="email" autoComplete="email" required /></div><div className="field"><label htmlFor="password">Password</label><input id="password" name="password" type="password" autoComplete="current-password" required /></div><button type="submit">Sign in securely</button></form></section></main>;
}
