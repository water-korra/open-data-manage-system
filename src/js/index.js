const {
  Action,
  ActionType,
  AvailableAction,
  AvailableFor,
  Category,
  DataFile,
  Dataset,
  Grant,
  MetadataKey,
  MetadataValue,
  Role,
  State,
  Type,
  User,
} = require('./models/model');

(async () => {
  const users = await User.findAll();
  console.log('All users:', JSON.stringify(users, null, 4));

  const anton = User.create({ name: 'Anton22', password: 'parol345' });
})();
