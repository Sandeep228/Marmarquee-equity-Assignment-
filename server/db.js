const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  password: "postgres",
  port: "5432",
  host: "localhost",
  database: "companystore",
});

module.exports = pool;

//docker run -it -d -E POSTGRES_PASSWORD=root -E POSTGRES_USERNAME=root -p 5432:5432 --name helloPostgres postgres
//docker-compose -f docker-compose.yaml up -d
