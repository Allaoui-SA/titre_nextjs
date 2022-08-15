import { getProviders, signIn as SignIntoProvider } from 'next-auth/react'

export default function signIn({ providers }) {
  return (
    <>
      <main className="min-h-screen flex justify-center items-center flex-col items-center max-w-[330px] mx-auto">
        <div className="relative w-[160px] h-[66px] flex items-center hidden lg:inline-grid cursor-pointer mb-6">
          <img src="/logo.png" />
        </div>
        <p className="mb-6">A place where all festival-goers share their best festival moments</p>

        <form className="form">
          {/* Email Input */}
          <div className="email flex flex-col items-center mb-6">
            <label className="mb-2.5">Email</label>
            <input className="full" type="email" placeholder="Enter email"/>
          </div>
          {/* Password Input */}
          <div className="password flex flex-col items-center mb-3.5">
            <label className="mb-2.5">Password</label>
            <input className="full" type="password" placeholder="Enter password"/>
          </div>

          {/* Reset Password */}
          <button className="mb-6 text-right">Forgot your password ?</button>

          <input type="submit" value="Sign In" className="submit mb-6"/>
        </form>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button className="mb-6 text-blue-500" onClick={() => SignIntoProvider(provider.id, { callbackUrl: "/"})}>
              Sign in with {provider.name}
            </button>
          </div>
        ))}
        <p className="text-center">Don't have an account yet? <a>Register</a></p>
      </main>
    </>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}