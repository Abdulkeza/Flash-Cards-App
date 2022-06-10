
import { Context } from "../../context";

const getAllUsers = async (parent:any, args:any , context: Context) =>{
    const allUsers = await context.prisma.user.findMany()
    return allUsers;

}

const getOneUser = async (parent: any, args: any, context: Context) =>{
    const { id } = args;
    const user = context.prisma.user.findUnique({ where: {id:id}});
    return user;

}

const createUser = async (parent: any, args: any, context: Context) =>{
    const {fullName, email, password} = args;
    const newUser = await context.prisma.user.create({
        data:{fullName, email, password}
    });
    return newUser;
    
}

const deleteUser = (parent: any, args: any, context: Context) =>{
    const {id} = args;
    const userExist = context.prisma.user.findUnique({where: {id:id}});
    if(!userExist) return "User not Found";
    return "User successifly deleted!";
    
}

const updateUser = (parent: any, args: any, context: Context) =>{
    const { id, fullName, email, password } = args;
    const updatedUser = context.prisma.user.update({
        where: {id: id},
        data:{fullName, email, password}

    });

    return updatedUser;
    
}

export {getAllUsers, getOneUser, createUser, deleteUser, updateUser};