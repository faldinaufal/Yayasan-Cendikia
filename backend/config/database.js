module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'localhost'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'yayasan_cendikia'),
      user: env('DATABASE_USERNAME', 'Farhan'),
      password: env('DATABASE_PASSWORD', 'farhan123'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});