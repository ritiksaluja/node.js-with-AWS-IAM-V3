import { IAMClient , DetachGroupPolicyCommand } from "@aws-sdk/client-iam";

const iam = new IAMClient()

const params = {
    PolicyArn:"" , 
    GroupName : "ritik"
}

const DetachPolicy = async()=>{
    try{

        const data = await iam.send(new DetachGroupPolicyCommand(params))
        console.log("policy Detached" , data)
        return data

    }

    catch(err){
        console.log(err)
        return err
    }
}

DetachPolicy()