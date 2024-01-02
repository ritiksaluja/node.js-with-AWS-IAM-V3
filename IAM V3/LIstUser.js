import { IAMClient , ListUsersCommand } from "@aws-sdk/client-iam";


const iamClient = new IAMClient()
const params = {MaxItems: 5}

const ListUsers = async ()=>{

       const data = await iamClient.send(new ListUsersCommand(params))
       console.log(data.Users)
       return data.Users
   
}

ListUsers()