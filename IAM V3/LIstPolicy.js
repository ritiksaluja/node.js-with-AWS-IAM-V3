import { IAMClient , ListPoliciesCommand } from "@aws-sdk/client-iam";

const iam =  new
 IAMClient()


const params = {
 Scope : "Local"
}


const ListofPolicies = async ()=>{
    try{
        const List = iam.send(new ListPoliciesCommand(params))
        console.log(List)
        return List

    }
    catch(err){
        console.log(err)
        return err

    }

}


ListofPolicies()