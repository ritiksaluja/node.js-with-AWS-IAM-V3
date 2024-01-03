import { IAMClient , AddUserToGroupCommand } from "@aws-sdk/client-iam";

const iam = new IAMClient()

const params = {
    GroupName: "ritiks" , 
    UserName : "first"
}

const addUser = async ()=>{
    try{
        const data = await iam.send(new AddUserToGroupCommand(params))
        console.log("userAdeed" , data)
        return(data)
    }
    catch(err){
        console.log(err)
        return(err)
    }
}
addUser()