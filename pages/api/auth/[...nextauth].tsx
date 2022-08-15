import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'


export default NextAuth({
  providers: [
    GoogleProvider({ 
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    }),
  ],
  secret: "MsvHRFxZchID7KGvmIpgvv6ESQH1/WFMYC4m+TFTwHc=",
  pages: {
    signIn: "/auth/signin",
  },
}) 
