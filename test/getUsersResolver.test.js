//const {resolvers} = require('../src');
const {getPrismaTestInstance} = require('./getPrismaTestInstance');

const  Query = require('../src/resolvers/Query')
const  Mutation = require('../src/resolvers/Mutation');
const  Subscription = require('../src/resolvers/Subscription');


afterEach(async () => {
    await getPrismaTestInstance().mutation.deleteManyUsers({where:{}})
})

test('Query users all works', async() => {
    
    //let token = 'dddidkdkkdkdkd';

    await getPrismaTestInstance().mutation.createUser({
        data: {
            name: "test1",
            lastname: "test",
            email: "test@gmail.com",
            password: "123456",
            birth_date: "1992-08-09T00:00:00"
        }
    });

    expect(
        await  Query.users(
            {},
            {},
            { db:getPrismaTestInstance() },
            `{name,lastname, email}`
        )
    ).toMatchSnapshot()
})

