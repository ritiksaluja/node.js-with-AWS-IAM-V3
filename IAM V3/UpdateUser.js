import { IAMClient , UpdateUserCommand  } from "@aws-sdk/client-iam";

const iam = new IAMClient()
const params = {
    UserName: "test" , 
    NewUserName : "test2"
} 


const updateuser = async ()=>{

    try{
        const data = await iam.send(new UpdateUserCommand(params))
        console.log(data)
        return data 
    }
    catch(err){
        console.log(err)
        return err
    }

}

updateuser()