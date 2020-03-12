# Atualiza um plano

Atualiza um plano ofertado pela academia.

- **PATH** <br />
  /plan/{id}

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
    "title": {
      "type": string
    },
    "duration": {
      "type": integer
    },
    "price": {
      "type": number,
      "multipleOf" 0.01
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
      "duration": 3,
      "price": "xxx.xx"
    }
    ```

- **Error Response:**

  - **Code:** 400 <br />
    **Description:** `"Duration must be a number"`

  - **Code:** 400 <br />
    **Description:** `"Duration must be positive"`

  - **Code:** 400 <br />
    **Description:** `"Duration must be an integer"`

  - **Code:** 400 <br />
    **Description:** `"Price must be a number"`

  - **Code:** 400 <br />
    **Description:** `"Price must be positive"`

  - **Code:** 400 <br />
    **Description:** `"Plan does not exist"`

  - **Code:** 400 <br />
    **Description:** `"Plan's name already exists"`
