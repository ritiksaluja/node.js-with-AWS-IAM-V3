import { IAMClient , AttachUserPolicyCommand} from "@aws-sdk/client-iam";


const Iam = new IAMClient()

const Params = {
    UserName : "ritik" , 
    PolicyArn : ""

}


const AttachPolicy = async ()=>{
    const data = await Iam.send(new AttachUserPolicyCommand( Params))
    console.log(data)
    return data

}

AttachPolicy()