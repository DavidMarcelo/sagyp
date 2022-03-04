/*const resolvers = {
    Query: {
      books: () => books,
    },
  };*/
const resolvers = {
    Query: {
        getUsers(root, args, { models }){
            return models.user.findAll();
        },
        getUser(root, args, { models }){
            return models.user.findByPk(args.name);
        }
    },
    Mutation: {
        createUser(root, {name, last_name, rfc}, {models}){
            return models.user.create({name, last_name, rfc});
        }
    }
}

module.exports = resolvers;