const databases = process.env.MONGO_DATABASES.split(',');

dbAdmin = db.getSiblingDB('admin')

for (const database of databases) {
  const user = process.env['MONGO_' + database + '_USER'];
  const password = process.env['MONGO_' + database + '_PASSWORD'];
  if (user && password) {
    dbAdmin.createUser({
      user: user,
      pwd: password,
      roles: [
        {
          role: 'readWrite',
          db: database,
        },
      ],
    });
    
    db = db.getSiblingDB(database);
    db.createCollection(database);

    console.log('Database "' + database + '" has been created!');
  }
}
