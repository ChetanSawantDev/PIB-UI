export class UserAuthDetails{
    id?: number;
    username?: string;
    email?: string;
    gender?: string;
    firstName?: string;
    lastName?: string;
    roles?: ("ADMIN"|"SUPERADMIN"|"MANAGER")[];
    token?: string; 
    profilePictureUrl?: string;
    lastLogin?: Date;
    isActive?: boolean;
    createdAt?: Date;
    updatedAt?: Date;

    constructor(init?:Partial<UserAuthDetails>){
        Object.assign(this,init);
    }
}