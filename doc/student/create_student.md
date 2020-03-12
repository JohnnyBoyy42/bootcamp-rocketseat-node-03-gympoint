# Cadastra um novo cliente

Cadastra um novo cliente na academia.

- **PATH** <br />
  /student

- **Method** <br />
  `POST`

- **Body Params** <br />
  &emsp;**Required** <br />
  &emsp;&ndash; name <br />
  &emsp;&ndash; email <br />
  &emsp;&ndash; age <br />
  &emsp;&ndash; height <br />
  &emsp;&ndash; weight

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
    }
  }
  ```

- **Success Response**

  - **Code**: 200 <br />
    **Description**:
    ```json
    {
      "id": 1,
      "title": "xxxx",
      "duration": 1,
      "price": "xxx.xx"
    }
    ```

- **Error Response:**

  - **Code:** 400 <br />
    **Description:** `"Name is required"`

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
    **Description:** `"Age is required"`

  - **Code:** 400 <br />
    **Description:** `"Height must be positive"`

  - **Code:** 400 <br />
    **Description:** `"Height is required"`

  - **Code:** 400 <br />
    **Description:** `"Weight must be positive"`

  - **Code:** 400 <br />
    **Description:** `"Weight is required"`

  - **Code:** 401 <br />
    **Description:** `"Student already exists"`
