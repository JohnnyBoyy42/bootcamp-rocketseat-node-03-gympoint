# Login no sistema

Retorna um token para ser usados em rotas restritas.

- **PATH** <br />
  /sessions

- **Method** <br />
  `POST`

- **Body Params** <br />
  &emsp;**Required** <br />
  &emsp;&ndash; email <br />
  &emsp;&ndash; password

  &emsp;**Properties**

  ```json
  {
    "email": {
      "type": string
    },
    "password": {
      "type": string
    }
  }
  ```

- **Success Response**

  - **Code**: 200 <br />
    **Description**:
    ```json
    {
      "user": {
        "id": xx,
        "name": "xxxx",
        "email": "xxxxxx@xxx.xxx"
      },
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImlhdCI6MTU2NTY1NjA2MCwiZXhwIjoxNTY2MjYwODYwfQ.fDm8dNsRrBQ_pWFNLqAsIyPqaIDr1M9BXAwqiL6R6XA"
    }
    ```

- **Error Response:**

  - **Code:** 400 <br />
    **Description:** `"Email must be a valid email format"`

  - **Code:** 400 <br />
    **Description:** `"Email is required"`

  - **Code:** 400 <br />
    **Description:** `"Password is required"`

  - **Code:** 401 <br />
    **Description:** `"User not found"`

  - **Code:** 401 <br />
    **Description:** `"Invalid Password"`
