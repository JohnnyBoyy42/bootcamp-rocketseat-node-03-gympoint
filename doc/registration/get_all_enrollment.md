# Consulta de todos os agendamentos

Retorna todos os planos ofertados pela academia.

- **PATH** <br />
  /plan

- **Method** <br />
  `GET`

- **Query Params** <br />
  &emsp;**Required** <br />
  &emsp;&ndash; page <br />

  &emsp;**Properties**

  ```json
  {
    "page": {
      "type": integer
    }
  }
  ```

- **Success Response**

  - **Code**: 200 <br />
    **Description**:
    ```json
    {
      "plans": [
        {
          "title": "xxxx",
          "duration": 1,
          "price": "xxx.xx"
        }
      ]
    }
    ```
