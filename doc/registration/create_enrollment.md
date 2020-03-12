# Cadastra uma nova matricula

Cadastra uma nova matricula de um aluno.

- **PATH** <br />
  /registration

- **Method** <br />
  `POST`

- **Body Params** <br />
  &emsp;**Required** <br />
  &emsp;&ndash; student_id <br />
  &emsp;&ndash; plan_id <br />
  &emsp;&ndash; start_date

  &emsp;**Properties**

  ```json
  {
    "student_id": {
      "type": integer
    },
    "plan_id": {
      "type": integer
    },
    "start_date": {
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
      "start_date": "xxxx-xx-xxTxx:xx:xx-xx:xx",
      "end_date": "xxxx-xx-xx",
      "price": "xxx.xx"
    }
    ```

- **Error Response:**

  - **Code:** 400 <br />
    **Description:** `"Student ID must be a number"`

  - **Code:** 400 <br />
    **Description:** `"Student ID must be positive"`

  - **Code:** 400 <br />
    **Description:** `"Student ID must be an integer"`

  - **Code:** 400 <br />
    **Description:** `"Student ID is required"`

  - **Code:** 400 <br />
    **Description:** `"Plan ID must be a number"`

  - **Code:** 400 <br />
    **Description:** `"Plan ID must be positive"`

  - **Code:** 400 <br />
    **Description:** `"Plan ID must be an integer"`

  - **Code:** 400 <br />
    **Description:** `"Plan ID is required"`

  - **Code:** 400 <br />
    **Description:** `"Starting date is required"`

  - **Code:** 400 <br />
    **Description:** `"Student does not exist"`

  - **Code:** 400 <br />
    **Description:** `"Plan does not exist"`

  - **Code:** 401 <br />
    **Description:** `"This student has a registration already"`

  - **Code:** 400 <br />
    **Description:** `"Past dates are not allowed"`
