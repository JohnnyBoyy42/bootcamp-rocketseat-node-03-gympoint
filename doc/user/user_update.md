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
      "type": string,
      "minimum": 6
    },
    "password": {
      "type": string,
      "minimum": 6
    },
    "confirmPassword": {
      "type": string,
      "minimum": 6
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
      "email": "xxxx@xxxx.com"
    }
    ```

- **Error Response:**

  - **Code:** 400 <br />
    **Description:** `"Email must be a valid email format"`

  - **Code:** 400 <br />
    **Description:** `"Minimum value 6"`

  - **Code:** 400 <br />
    **Description:** `"Password is required"`

  - **Code:** 400 <br />
    **Description:** `"Confirm password is required"`

  - **Code:** 400 <br />
    **Description:** `"Passwords are not equal"`

  - **Code:** 400 <br />
    **Description:** `"User already exists"`

  - **Code:** 401 <br />
    **Description:** `"Invalid password"`
