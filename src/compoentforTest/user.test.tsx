import axios from "axios";
import Users from './user';
jest.mock('axios');

test('should fecth users', () => {
  const users = [{ name: 'Bob' }];
  const resp = { data: users };
  (axios.get as any).mockResolvedValue(resp);

  return Users.all().then(data=>{
    expect(data).toEqual(users)
  })
})