# Atualiza uma matricula

Atualiza a matricula de um cliente.

- **PATH** <br />
  /registration/{id}

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
    "student_id": {
      "type": integer
    },
    "plan_id": {
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
      "start_date": "xxxx-xx-xx",
      "end_date": "xxxx-xx-xx",
      "price": "xxx.xx",
      "canceled_at": null,
      "createdAt": "xxxx-xx-xxTxx:xx:xx.xxxZ",
      "updatedAt": "xxxx-xx-xxTxx:xx:xx.xxxZ",
      "student_id": 1,
      "plan_id": 1
    }
    ```

- **Error Response:**

  - **Code:** 400 <br />
    **Description:** `"Student ID must be a number"`

  - **Code:** 400 <br />
    **Description:** `"Student ID must be positive"`

  - **Code:** 400 <br />
    **Description:** `"Student ID must be an integer"`

  - **Code:** 400 <br />
    **Description:** `"Plan ID must be a number"`

  - **Code:** 400 <br />
    **Description:** `"Plan ID must be positive"`

  - **Code:** 400 <br />
    **Description:** `"Plan ID must be an integer"`

  - **Code:** 400 <br />
    **Description:** `"Registration does not exist"`

  - **Code:** 400 <br />
    **Description:** `"Plan does not exist"`
