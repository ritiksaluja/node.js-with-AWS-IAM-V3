import { IAMClient , AttachGroupPolicyCommand } from "@aws-sdk/client-iam";

const iam = IAMClient()

const params = {
    PolicyArn :"" , 
    GroupName : "IAMVAccess"
}

const AttachPolicy = async ()=>{
    try{
        const data = await iam.send(new AttachGroupPolicyCommand(params))
        console.log(data , "polic y Attached")
        return data

    }
    catch (err){
      console.log(err)
      return err
    }
}

AttachPolicy()