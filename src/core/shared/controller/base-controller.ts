import { Responses } from "../responses/response";
import { DropdownService } from "../services/dropdown.service";

export class BaseController{
    constructor(){

    }
    error(e:TypeError){        
        return Responses.error(e.message,e.stack,501)
    }
    success(data:any){
        return Responses.success('success',data,200)
    }
}