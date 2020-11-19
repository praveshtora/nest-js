#### Statement

1. Create a Postgres database with [these records](https://docs.google.com/spreadsheets/d/1DEt1owRkttnv0Vj8EV34qVTsGY6MPqrKtA4gNkG45Dc/edit#gid=0).
2. Using Nest.js, create a REST API to return results based on the state, pet
   experience, names, and/or email you pass to the endpoint.

#### Api Design

```
curl --location --request GET 'http://localhost:3000/customers/state=ACT&firstName=customer?limit=10&offset=0'
```

limit and offset are mandatory because we do not want large data to be in memory if table size grows exponentially.

#### Local Setup

```
npm install
DB_USER=postgres DB_PW=postgres123 DB_NAME=postgres npm run start
```

We can also create docker by running the command docker build -t nest-app ./ and then start docker by running a command

```
docker run -d --name server  -p 3000:3000 --restart unless-stopped  -e ENV="production"-e DB_USER=psotgres -e DB_PW=postgres123 -e DB_NAME=postgres -e PORT=3000 <image>
```

the docker-compose file is still in progress and needs to be tested.

#### Scope for improvisations

- API is unauthenticated. Guards are provided by nest js which could have been used.
- Used raw SQL query. TypeORM custom query builder could have been used to generate a dynamic query
