# Cadastra um novo agendamento

Cadastra um novo agendamento por um fornecedor de serviço

- **PATH** <br />
  /appointments

- **Method** <br />
  `POST`

- **Body Params** <br />
  &emsp;**Required** <br />
  &emsp;&ndash; provider_id <br />
  &emsp;&ndash; date

  &emsp;**Properties**

  ```json
  {
    "provider_id": {
      "type": integer
    },
    "date": {
      "type": string
    }
  }
  ```

- **Success Response**

  - **Code**: 200 <br />
    **Description**:
    ```json
    {
      "id": 1,
      "user_id": 1,
      "provider_id": 1,
      "date": "xxxx-xx-xxTxx:xx:xx.xxxZ",
      "updatedAt": "xxxx-xx-xxTxx:xx:xx.xxxZ",
      "createdAt": "xxxx-xx-xxTxx:xx:xx.xxxZ",
      "canceled_at": null
    }
    ```

- **Error Response:**

  - **Code:** 400 <br />
    **Description:** `"Validation fails"`

  - **Code:** 401 <br />
    **Description:** `"You can only create appointmentes with providers"`

  - **Code:** 401 <br />
    **Description:** `"You can't create an appointment with yourself"`

  - **Code:** 400 <br />
    **Description:** `"Past dates are not allowed"`

  - **Code:** 400 <br />
    **Description:** `"Appointment date is no available"`
