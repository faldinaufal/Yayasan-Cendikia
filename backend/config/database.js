module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'localhost'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'u1571645_ruang-disabilitas'),
      user: env('DATABASE_USERNAME', 'u1571645_ruangdisabilitas'),
      password: env('DATABASE_PASSWORD', 'ruangdisabilitas'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});