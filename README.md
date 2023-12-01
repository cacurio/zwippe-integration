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
