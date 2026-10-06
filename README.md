# Customer API

A REST API for managing customer records. It is built with TypeScript, Express, and Prisma ORM, and uses MongoDB as its database.

## 🖥️ Frontend

The frontend for this application is maintained in the [customer-app-ui repository](https://github.com/hugopereira-cs/customer-app-ui).

## ✨ Features

- List, create, retrieve, update the email of, and delete customers.
- Customer records have a name, email address, status, and optional creation/update timestamps.
- Customer IDs use MongoDB ObjectIds.

## 🧰 Requirements

- Node.js and npm
- A MongoDB database and its connection string

## 🚀 Getting started

1. Install the dependencies:

   ```bash
   npm install
   ```

2. Create a `.env` file in the project root with the variables used by the application:

   ```env
   PORT=<port>
   DATABASE_URL=<MongoDB connection string>
   ```

3. Start the development server:

   ```bash
   npm run start:dev
   ```

The API listens on the port set by `PORT`. All endpoints are mounted under `/api`.

## 📡 API

The examples below use `http://localhost:<PORT>/api` as the base URL.

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/customers` | List all customers |
| `POST` | `/customers` | Create a customer |
| `GET` | `/customers/:id` | Retrieve a customer by ID |
| `PATCH` | `/customers/:id` | Update a customer's email |
| `DELETE` | `/customers/:id` | Delete a customer |

### Create a customer

`POST /customers`

```json
{
  "name": "Ada Lovelace",
  "email": "ada@example.com",
  "status": true
}
```

The request must include `name` and `email`. If `status` is omitted or falsy, the service sets it to `true`. A successful request returns the created customer.

### Retrieve a customer

`GET /customers/:id` returns the matching customer. IDs must be 24-character hexadecimal MongoDB ObjectIds.

### Update a customer's email

`PATCH /customers/:id`

```json
{
  "email": "ada.lovelace@example.com"
}
```

The request must include an email value.

### Delete a customer

`DELETE /customers/:id` deletes the matching customer.

Invalid input and missing records return an error response with a `message` field.

## 🛠️ Available scripts

| Command | Description |
| --- | --- |
| `npm run start:dev` | Run the server with `tsx`, loading variables from `.env` |
| `npm run start:watch` | Run the server in watch mode, loading variables from `.env` |
| `npm run dist` | Build the application into `dist` |
| `npm run start:dist` | Build the application and run the generated server |
| `npm run typecheck` | Run the TypeScript type check |
| `npm run lint` | Check the project with Biome |
| `npm run format` | Format the project with Biome |
