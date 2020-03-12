# Criar solicitação de assistência

Cria uma nova solicitação de assistência feita por um aluno.

- **PATH** <br />
  /students/{id}/help-orders

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
    "question": {
      "type": string
    }
  }
  ```

- **Success Response**

  - **Code**: 200 <br />
    **Description**:
    ```json
    {
      "idBase": 1,
      "student_id": 1,
      "question": "xxxxxx?"
    }
    ```

- **Error Response:**

  - **Code:** 400 <br />
    **Description:** `"Question is required"`

  - **Code:** 400 <br />
    **Description:** `"Student does not exist"`
