# Cadastra um novo plano

Cadastra um novo plano de venda para academia.

- **PATH** <br />
  /plan

- **Method** <br />
  `POST`

- **Body Params** <br />
  &emsp;**Required** <br />
  &emsp;&ndash; title <br />
  &emsp;&ndash; duration <br />
  &emsp;&ndash; price

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
      "duration": 1,
      "price": "xxx.xx"
    }
    ```

- **Error Response:**

  - **Code:** 400 <br />
    **Description:** `"Title is required"`

  - **Code:** 400 <br />
    **Description:** `"Duration must be a number"`

  - **Code:** 400 <br />
    **Description:** `"Duration must be positive"`

  - **Code:** 400 <br />
    **Description:** `"Duration must be an integer"`

  - **Code:** 400 <br />
    **Description:** `"Duration is required"`

  - **Code:** 400 <br />
    **Description:** `"Price must be a number"`

  - **Code:** 400 <br />
    **Description:** `"Price must be positive"`

  - **Code:** 400 <br />
    **Description:** `"Price is required"`

  - **Code:** 400 <br />
    **Description:** `"Plan already exists"`
