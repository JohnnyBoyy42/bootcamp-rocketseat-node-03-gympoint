# Exclui um plano

Exclui um plano ofertado pela academia.

- **PATH** <br />
  /plan/{id}

- **Method** <br />
  `DELETE`

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

- **Success Response**

  - **Code**: 200 <br />
    **Description**:
    ```json
    {
      "plan": {
        "id": 1,
        "title": "xxxxx",
        "duration": 1,
        "price": "xxx.xxx",
        "canceled_at": "xxxx-xx-xxTxx:xx:xx.xxxZ",
        "createdAt": "xxxx-xx-xxTxx:xx:xx.xxxZ",
        "updatedAt": "xxxx-xx-xxTxx:xx:xx.xxxZ"
      }
    }
    ```

- **Error Response:**

  - **Code:** 400 <br />
    **Description:** `"Plan does not exist"`
