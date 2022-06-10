import { makeSchema } from 'nexus'
import { join } from 'path'
import { User } from './graphql/users/User'
import { userQuerry } from './graphql/users/query'
import { createUserMutation } from './graphql/users/mutation'

export const schema = makeSchema({
  types: [User, userQuerry, createUserMutation], 
  outputs: {
    schema: join(process.cwd(), "schema.graphql"), 
    typegen: join(process.cwd(), "nexus-typegen.ts"), 
  },
})