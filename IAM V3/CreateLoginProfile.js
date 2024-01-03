import { IAMClient , CreateLoginProfileCommand } from "@aws-sdk/client-iam";

const iam = new IAMClient()

const params = {
    Password : "ritik@123",
    PasswordResetRequired :  true , 
    UserName: "ritik"
}

const CreateLogin = async()=>{
    try{
        const data = await iam.send(new CreateLoginProfileCommand(params))
        return data
    }
    catch(err){
        return err
    }
}

CreateLogin()