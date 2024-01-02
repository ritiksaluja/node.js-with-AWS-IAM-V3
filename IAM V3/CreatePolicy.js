import { IAMClient , CreatePolicyCommand } from "@aws-sdk/client-iam";

const iam = new IAMClient()
const policyDocument = {
    "Version" : "2012-10-17" , 
    "Statement" : [
        {
            "Effect" : "Allow" , 
            "Action" : "*" , 
            "Resource" : "*"
        }
    ]

}

const params = {
    PolicyDocument : JSON.stringify(policyDocument) , 
    PolicyName : "IAMVAccess"
}


const CreatePOlicy = async ()=>{

    try{
        const data = await iam.send(new CreatePolicyCommand(params))
        console.log(data)
        return data
    }

    catch(err){
        console.log(err)
        return err

    }
  

}

CreatePOlicy()