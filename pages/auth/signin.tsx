import { getProviders, signIn } from 'next-auth/react'

export default function signin() {
  return (
    <div>I am i the signin page!!</div>
  )
}

export async function getServerSideProps() {
  const providers = getProviders()

  return {
    props: {
      providers
    }
  }
}