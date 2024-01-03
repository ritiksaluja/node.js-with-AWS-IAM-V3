import { IAMClient , DeleteLoginProfileCommand } from "@aws-sdk/client-iam";

const iam = new IAMClient()


const params = {
    UserName: "ritik"
}

const DeleteLogin = async ()=>{
    try{
        const data = await iam.send(new DeleteLoginProfileCommand(params))
        return data
    }
    catch(err){
        return err
    }
}

DeleteLogin()