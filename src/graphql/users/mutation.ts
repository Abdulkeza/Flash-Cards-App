import { extendType, intArg, nonNull, stringArg } from "nexus";
import { createUser } from "./resolvers";

export const createUserMutation = extendType({
    type: 'Mutation',
    definition(t){
        t.nonNull.field('CreateUser', {
            type: 'User',
            description: "Create a new user",
            args: {
                fullName:nonNull(stringArg()),
                email: nonNull(stringArg()),
                password: nonNull(intArg())
            },
            resolve: createUser,

        });
    }
})