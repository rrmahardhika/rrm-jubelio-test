# Jubelio Fullstack Engineer Project Test
Jubelio Fullstack Engineer Project Test by Randy R Mahardhika
## Authors

- [@rrmahardhika](https://www.github.com/rrmahardhika)


## Run Locally

Clone the project

```bash
  git clone https://https://github.com/rrmahardhika/rrm-jubelio-test
```
[Back End Installation]

1. Go to the project directory and open 'api' folder

```bash
  cd api
```

2. Install dependencies

```bash
  npm install
```

3. Configure the db connection in db-config.json file

4. Execute  table-script.sql to your PostgreSQL Database

5. Configure db-config.json file based on your local settings.

6. Start the server

```bash
  npm start
```


[Front End Installation]

1. Go to the project directory and open 'app' folder

```bash
  cd app
```

2. Install dependencies

```bash
  npm install
```

3. Start the server

```bash
  npm run start
```

## Tech Stack

**Front End:** React, MobX, React-Bootstrap, Axios

**Server:** Node, Hapi, pg-promise


## Important API Reference

#### Get all items from jubelio store

```http
  GET /product/retrieve
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|  |  |  |

#### Delete all products

```http
  DELETE /product/all
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
|     |  |  |

