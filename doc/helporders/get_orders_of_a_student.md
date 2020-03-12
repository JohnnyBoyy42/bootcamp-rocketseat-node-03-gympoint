# Consultar solicitação de assistência de um aluno

Retorna todas as solicitações de assistência de um determinado aluno.

- **PATH** <br />
  /students/{id}/help-orders

- **Method** <br />
  `GET`

- **Path Params** <br />
  &emsp;**Required** <br />
  &emsp;&ndash; id

  &emsp;**Properties**

  ```json
  {
    "id": {
      "type": integer,
      "description": A student's ID
    }
  }
  ```

- **Success Response**

  - **Code**: 200 <br />
    **Description**:
    ```json
    {
      "orders": [
        {
          "id": 1,
          "student_id": 1,
          "answer": "xxxxxxx",
          "answer_at": "xxxx-xx-xxTxx:xx:xx.xxxZ",
          "created_at": "xxxx-xx-xxTxx:xx:xx.xxxZ"
        }
      ]
    }
    ```

- **Error Response:**

  - **Code:** 400 <br />
    **Description:** `"Student does not exist"`
