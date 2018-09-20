const {Prisma} = require('prisma-binding');



const getPrismaTestInstance = () => {
    return new Prisma({
        typeDefs: 'src/generated/prisma.graphql',
        endpoint: "https://test-server-netflix-juan.herokuapp.com/test/test"
    })
}

module.exports = {
    getPrismaTestInstance
}