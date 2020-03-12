# Atualiza um cliente

Atualiza um cliente cadastrado na academia.

- **PATH** <br />
  /student/{id}

- **Method** <br />
  `PUT`

- **Path Params** <br />
  &emsp;**Required** <br />
  &emsp;&ndash; id

  &emsp;**Properties**

  ```json
  {
    "id": {
      "type": integer
    }
  }
  ```

- **Body Params** <br />

  &emsp;**Properties**

  ```json
  {
    "name": {
      "type": string
    },
    "email": {
      "type": string
    },
    "age": {
      "type": integer
    },
    "height": {
      "type": string
    },
    "weight": {
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
      "name": "xxxxx",
      "height": "x.xx",
      "weight": "xx"
    }
    ```

- **Error Response:**

  - **Code:** 400 <br />
    **Description:** `"Email must be a valid email format"`

  - **Code:** 400 <br />
    **Description:** `"Name is required"`

  - **Code:** 400 <br />
    **Description:** `"Age must be a number"`

  - **Code:** 400 <br />
    **Description:** `"Age must be positive"`

  - **Code:** 400 <br />
    **Description:** `"Age must be an integer"`

  - **Code:** 400 <br />
    **Description:** `"Height must be positive"`

  - **Code:** 400 <br />
    **Description:** `"Weight must be positive"`

  - **Code:** 401 <br />
    **Description:** `"Student already exists"`
