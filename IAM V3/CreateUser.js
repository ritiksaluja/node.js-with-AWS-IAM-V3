import { IAMClient , CreateUserCommand , GetUserCommand } from "@aws-sdk/client-iam";

const iamCLient = new IAMClient;

const params = {
    UserName: "ritikv3"
}

const CreateUser = async ()=>{
    try{
        const data = iamCLient.send(new GetUserCommand(params))
        console.log("user already exist")
        return data 
    }
    catch(err){
        try{
            const result = iamCLient.send(new CreateUserCommand(params))
            console.log("user Created")
            return result
        }
        catch(err){

            console.log(err)

        }

    }
}

CreateUser()