import { extendType } from 'nexus';
import { getAllUsers, getOneUser } from './resolvers';

export const userQuerry = extendType({
	type: 'Query',
	definition(t) {
		t.nonNull.list.nonNull.field('returnAllUsers', {
			type: 'User',
			description: 'Returns a list of all users in the database',
			resolve: getAllUsers,
		});
	},
});
