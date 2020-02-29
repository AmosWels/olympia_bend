const { getToken, encryptPassword, comparePassword } = require("../utils")
const db = require('../db');

const {
    AuthenticationError,
} = require('apollo-server');

const userResolvers = {
    Query: {
        profile: (parent, args, context, info) => {
            if (context.loggedIn) {
                return context.user
            } else {
                throw new AuthenticationError("Please Login Again!")
            }
        }
    },
    Mutation: {
        register: async (parent, args, context, info) => {
            const newUser = { firstname:args.firstname, surname:args.surname, gender:args.gender, email: args.email, password: await encryptPassword(args.password) }
            // Check conditions
            const user = await db.getCollection('user').findOne({ email: args.email })
            if (user) {
                throw new AuthenticationError("User Already Exists!")
            }
            try {
                const regUser = (await db.getCollection('user').insertOne(newUser)).ops[0]
                const token = getToken(regUser);
                return { ...regUser, token }
            } catch (e) {
                throw e
            }
        },
        login: async (parent, args, context, info) => {
            const userEmail =  args.email;
            console.log('>>>>>>dd',await db.getCollection('user').findOne({ email: userEmail }));
            const user = await db.getCollection('user').findOne({ email: userEmail })
            if (!user) {
                throw new AuthenticationError("User Doesn't Exist!")
            }
            const isMatch = await comparePassword(args.password, user.password)
            if (isMatch) {
                const token = getToken(user)
                return { ...user, token };
            } else {
                throw new AuthenticationError("Wrong Password!")
            }
        },
    }
};

module.exports = {
    userResolvers,
}
