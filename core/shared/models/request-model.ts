import { Users } from "src/core/users/users.entity";

export interface CustomRequest extends Request{
    user?:Users
}