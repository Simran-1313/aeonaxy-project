import mongoose from "mongoose";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "../../../libs/mongoConnect"
import { User } from '../../models/User'
import bcrypt from "bcrypt";

export const authOptions = {
  session: {
    strategy: 'jwt',
   
 },
  secret:process.env.SECRET,
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
  
      CredentialsProvider({
        
        name: 'Credentials',
        id:'credentials',
        credentials: {
          email: { label: "Email", type: "email", placeholder: "test@example.com" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials,req) {
          const {email,password}  = credentials; 
          // const email= credentials?.email;
          // const password = credentials?.password;

          mongoose.connect(process.env.MONGO_URL);
          const user =  await User.findOne({email});
         
          const passwordOk = user && bcrypt.compareSync(password, user.password);
          
          
          if(passwordOk){
           
           
            return user;

          }

          else{
            return null
          }
        }
      })
    ],
    callbacks:{
      async jwt ({token,user,session,trigger}) {
        console.log("jwt",{token,user,session})

        if(trigger==='update'&& session?.name  ){
          token.name = session.name;
          // token.image=session.image

        }


        // pass in userid to token
        if (user) {
          return{
            ...token,
            id: user.id
          }
        }
        return token;
      },
      async session({session,token,user}){
        
        //pass in user id to session
        return{
          ...session,
          user:{
            ...session.user,
            id:token.id,
            name:token.name,
            // image:token.image
          }
        }
        return session;
      }
    }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }