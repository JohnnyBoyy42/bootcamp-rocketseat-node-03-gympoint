# Verificar horário disponível

Retorna horários disponíveis para agendamento

- **PATH** <br />
  /providers/{providerId}/available

- **Method** <br />
  `GET`

- **Path Params** <br />
  &emsp;**Required** <br />
  &emsp;&ndash; providerId

  &emsp;**Properties**

  ```json
  {
    "providerId": {
      "type": integer
    }
  }
  ```

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
        "time": "xx:xx",
        "value": "xxxx-xx-xxTxx:xx:xx-xx:xx",
        "available": false
      }
    ]
    ```

- **Error Response:**

  - **Code:** 400 <br />
    **Description:** `"Invalid date ."`
