import { objectType } from "nexus";

export const User = objectType({
    name: "User", // 1 
    definition(t) {  // 2
        t.nonNull.int("id"); // 3 
        t.nonNull.string("fullName"); // 4
        t.nonNull.string("email"); // 5 
        t.nonNull.int("password");
    },
});