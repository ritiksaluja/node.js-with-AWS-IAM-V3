import { IAMClient , DetachUserPolicyCommand } from "@aws-sdk/client-iam";

const iam = new IAMClient()

const params = {
    PolicyArn : "" , 
    UserName : "ritik"

}

const DetachPolicy = async ()=> {
    const data = await iam.send(new DetachUserPolicyCommand(params))
    console.log(data)
}

DetachPolicy()