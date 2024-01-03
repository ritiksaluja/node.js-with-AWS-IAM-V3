import { IAMClient , DeleteUserCommand } from "@aws-sdk/client-iam";

const iam = new IAMClient()

const params = {
    UserName: "ritik"
}

const DeleteUser = async ()=>{
    try{
        const data = await iam.send(new DeleteUserCommand(params))
        return data 
    }
    catch(err){
        return err
    }
}

DeleteUser()