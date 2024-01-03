import { IAMClient , CreateGroupCommand } from "@aws-sdk/client-iam";

const iam = new IAMClient()

const params = {
    GroupName : "mygroup"
}

const CreateGroup = async ()=>{
    try{
        const data = await iam.send(new CreateGroupCommand(params))
        console.log("group created" ,data)
        return data
    }
    catch(err){
      console.log(err)
      return err
    }
}

CreateGroup()