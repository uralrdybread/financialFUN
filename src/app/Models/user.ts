// export enum Role
// {
//     Role = "CLIENT"
// }
export class User
{
    
    constructor
    (
        public user_id: Number,
        public username : String,
        public password : String,
        public name : String,
        public phonenumber : String,
        public age : Number,
        public bio : String,
        public role : any
    ){}
}