# Responder solicitação de assistência

Responde solicitação de assistência feita por um aluno

- **PATH** <br />
  /help-orders/{id}/answer

- **Method** <br />
  `POST`

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

- **Body Params** <br />

  &emsp;**Properties**

  ```json
  {
    "answer": {
      "type": string
    }
  }
  ```

- **Success Response**

  - **Code**: 200 <br />
    **Description**:
    ```json
    {
      "order": {
        "id": 1,
        "question": "xxxxxxxxx?",
        "answer": "xxxxxxxxxxxx",
        "answer_at": "xxxx-xx-xxTxx:xx:xx.xxxZ",
        "createdAt": "xxxx-xx-xxTxx:xx:xx.xxxZ",
        "updatedAt": "xxxx-xx-xxTxx:xx:xx.xxxZ",
        "student_id": 1,
        "student": {
          "name": "xxxxxx",
          "email": "xxxxx@xxxxxxx.xx"
        }
      }
    }
    ```

- **Error Response:**

  - **Code:** 400 <br />
    **Description:** `"Answer is required"`

  - **Code:** 400 <br />
    **Description:** `"Help Order does not exist"`
