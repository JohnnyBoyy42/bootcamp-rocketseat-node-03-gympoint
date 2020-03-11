# Cadastro de usuário

Cadastra um novo usuário no sistema.

- **URL** <br />
  /users

- **Method** <br />
  `POST`

- **Body Params** <br />
  &emsp;**Required** <br />
  &emsp;&ndash; name <br />
  &emsp;&ndash; email <br />
  &emsp;&ndash; password

  &emsp;**Properties**

  ```json
  {
    "name": {
      "type": string
    },
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
      "id": 1,
      "name": "name",
      "email": "xxxx@xxxx.com",
      "provider": false
    }
    ```

- **Error Response:**

  - **Code:** 400 <br />
    **Description:** `"Usuario ja existente"`

  - **Code:** 400 <br />
    **Description:** `"erro de validacao"`
