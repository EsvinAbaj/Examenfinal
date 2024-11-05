

const env = {
  database: 'login_node_jwt_hfcp',
  username: 'login_node_jwt_hfcp_user',
  password: 'RhbIVzHY17ofoLxiRSkH9Tgq1kcGTlIb',
  host: 'dpg-csk7ppdsvqrc73f32u0g-a.oregon-postgres.render.com',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

module.exports = env;