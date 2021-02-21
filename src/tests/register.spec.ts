import { request } from 'graphql-request';
import { User } from "../entity/User";
import { startServer } from "../utils/startServer";

let getHost = () => '';

beforeAll(async () => {
    const app = await startServer();
    const { port } = app.address();
    getHost = () => `http://127.0.0.1:${port}`;
})

const email = "";
const password = "";

const mutation = `
    mutation {
        register(email: "${email}", password: "${password}")
    }
`

test('deep', async () => {
    const respoonse = await request(getHost(), mutation);
    expect(respoonse).toEqual({ register: true });
    const users = await User.find({ where: { email } });
    expect(users).toHaveLength(1);

    const user = users[0];
    expect(user.email).toEqual(email);
    expect(user.password).not.toEqual(password);

})