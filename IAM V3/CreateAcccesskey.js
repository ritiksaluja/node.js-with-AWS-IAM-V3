import { IAMClient , CreateAccessKeyCommand } from "@aws-sdk/client-iam";

const iam = new IAMClient()

const params = {

    UserName : "ritik"

}


const CreateKey = async ()=>{
    try{
        const data = iam.send(new CreateAccessKeyCommand(params))
        console.log("accesws key" , data)
        return data
    }
    catch(err){
        console.log(err)
        return err
    }
}

CreateKey()