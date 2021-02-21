import { createTypeormConnection } from "../utils/createTypeormConnection"
import { host } from "./constant";
import { request } from 'graphql-request';
import { User } from "../entity/User";

beforeAll(async () => {
    await createTypeormConnection();
})

const email = "";
const password = "";

const mutation = `
    mutation {
        register(email: "${email}", password: "${password}")
    }
`

test('deep', async () => {
    const respoonse = await request(host, mutation);
    expect(respoonse).toEqual({ register: true });
    const users = await User.find({ where: { email } });
    expect(users).toHaveLength(1);

    const user = users[0];
    expect(user.email).toEqual(email);
    expect(user.password).not.toEqual(password);

})