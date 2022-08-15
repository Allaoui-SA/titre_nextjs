import { getProviders, signIn as SignIntoProvider } from 'next-auth/react'

export default function signIn({ providers }) {
  return (
    <>
      <main className="min-h-screen flex justify-center items-center flex-col items-center max-w-[330px] mx-auto">
        <div className="relative w-[160px] h-[66px] flex items-center hidden lg:inline-grid cursor-pointer mb-6">
          <img src="/logo.png" />
        </div>
        <p className="mb-6 text-center">A place where all festival-goers share their best festival moments</p>

        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button className="google" onClick={() => SignIntoProvider(provider.id, { callbackUrl: "/"})}>
              Sign in with {provider.name}
            </button>
          </div>
        ))}
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