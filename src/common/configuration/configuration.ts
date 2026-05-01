export default () => ({
  port: process.env.PORT ? parseInt(process.env.PORT, 10) : 3000,
  database: {
    host: process.env.DATABASE_HOST ?? 'localhost',
    port: process.env.DATABASE_PORT
      ? parseInt(process.env.DATABASE_PORT, 10)
      : 5432,
    username: process.env.DATABASE_USER ?? 'postgres',
    password: process.env.DATABASE_PASSWORD ?? 'password',
    database: process.env.DATABASE_NAME ?? 'parallel_programming_app',
    url:
      process.env.DATABASE_URL ??
      'postgresql://postgres:password@localhost:5432/parallel_programming_app?schema=public',
  },
  jwt: {
    access_secret: process.env.JWT_SECRET,
  },
});
