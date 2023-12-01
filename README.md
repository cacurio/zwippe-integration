# Run APIs server

use node version 20.x

```bash
$ pnpm run dev:start
```

Api base url: http://localhost:3000/

# Run notification server

java version 17.x

```bash
$ /.gradlew bootRun
```

# GraphQL playground

```bash
http://localhost:3000/graphql
```

Query example:

```graphql
query {
  transaction(id: 123) {
    status
    account
    amount
  }
}
```

Postman collection -> https://api.postman.com/collections/16349558-c0c5ea09-86d6-4b7b-8f32-126197f7f5bb?access_key=PMAT-01HGHCPA7JGTX16CGE7RX6ER8Q
