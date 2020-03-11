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
      "type": string,
      "minimum": 6
    }
  }
  ```

- **Success Response**

  - **Code**: 200 <br />
    **Description**:
    ```json
    {
      "id": 1,
      "name": "xxxxx",
      "email": "xxxx@xxxx.com"
    }
    ```

- **Error Response:**

  - **Code:** 400 <br />
    **Description:** `"Name is required"`

  - **Code:** 400 <br />
    **Description:** `"Email must be a valid email format"`

  - **Code:** 400 <br />
    **Description:** `"Email is required"`

  - **Code:** 400 <br />
    **Description:** `"Minimum value 6"`

  - **Code:** 400 <br />
    **Description:** `"Password is required"`

  - **Code:** 401 <br />
    **Description:** `"User already exists"`
