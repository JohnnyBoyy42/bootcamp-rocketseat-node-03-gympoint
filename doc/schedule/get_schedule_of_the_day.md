# Consulta agenda

Consulta todos os agendamentos do dia

- **PATH** <br />
  /schedule

- **Method** <br />
  `GET`

- **Query Params** <br />
  &emsp;**Required** <br />
  &emsp;&ndash; date

  &emsp;**Properties**

  ```json
  {
    "date": {
      "type": string
    }
  }
  ```

- **Success Response**

  - **Code**: 200 <br />
    **Description**:
    ```json
    [
      {
        "past": true,
        "cancellable": false,
        "id": 1,
        "date": "xxxx-xx-xxTxx:xx:xx.xxxz",
        "provider": {
          "id": 1,
          "name": "xxxx"
        }
      }
    ]
    ```

- **Error Response:**

  - **Code:** 401 <br />
    **Description:** `"User is not a provider"`
