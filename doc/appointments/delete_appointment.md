# Exclui um agendamento

Exclui um agendamento com duas horas de antecedência

- **PATH** <br />
  /appointments/{id}

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
      "id": 1,
      "date": "xxxx-xx-xxTxx:xx:xx.xxxZ",
      "canceled_at": "xxxx-xx-xxTxx:xx:xx.xxxZ",
      "createdAt": "xxxx-xx-xxTxx:xx:xx.xxxZ",
      "updatedAt": "xxxx-xx-xxTxx:xx:xx.xxxZ",
      "user_id": 1,
      "provider_id": 1,
      "provider": {
        "name": "xxxx",
        "email": "xxxxxx@xxxx.xxxx"
      },
      "user": {
        "name": "xxxx"
      }
    }
    ```

- **Error Response:**

  - **Code:** 401 <br />
    **Description:** `"You don't have permission to cancel this appointment."`

  - **Code:** 401 <br />
    **Description:** `"you can only cancel appointments 2 hours ahead"`
