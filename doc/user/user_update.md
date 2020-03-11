# Atualização de usuário

Atualiza um usuário existente no sistema.

- **URL** <br />
  /users

- **Method** <br />
  `PUT`

- **Body Params** <br />

  ```json
  {
    "name": {
      "type": string
    },
    "email": {
      "type": string
    },
    "oldPassword": {
      "type": string
    },
    "password": {
      "type": string
    },
    "confirmPassword": {
      "type": string
    },
    "avatar_id": {
      "type": integer
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
    **Description:** `"Erro de validacao"`

  - **Code:** 401 <br />
    **Description:** `"Senha nao confirmada"`
