const bcrypt = require('bcryptjs');

const {User} = require('../../src/app/models');
const truncate = require('../utils/truncate');
const { password } = require('../../src/config/database');

describe('User', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should encrypt user password', async () => {
    const user = await User.create({
      name: 'Diego',
      email: 'diego3g@rocketseat.com.br',
      password: '123123'
    });
    
    const compareHash = await bcrypt.compare(user.password, user.password_hash);
    //console.log(user.password, user.password_hash);
    expect(compareHash).toBe(true);
  });
});
