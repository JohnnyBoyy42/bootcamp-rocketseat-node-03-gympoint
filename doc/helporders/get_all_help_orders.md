# Consultar matriculas

Retorna todas as solicitações de assistência dos alunos.

- **PATH** <br />
  /help-orders

- **Method** <br />
  `GET`

- **Success Response**

  - **Code**: 200 <br />
    **Description**:
    ```json
    {
      "orders": [
        {
          "id": 1,
          "student_id": 1,
          "answer": null,
          "answer_at": null,
          "created_at": "xxxx-xx-xxTxx:xx:xx.xxxZ"
        }
      ]
    }
    ```
