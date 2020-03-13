# Consultar check-in de aluno

Realiza um novo check-in de aluno.

- **PATH** <br />
  /students/{id}/checkins

- **Method** <br />
  `POST`

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
      "checkins": [
        {
          "id": 1,
          "createdAt": "xxxx-xx-xxTxx:xx:xx.xxxZ",
          "updatedAt": "xxxx-xx-xxTxx:xx:xx.xxxZ",
          "student_id": 8,
          "student": {
            "name": "xxxxx",
            "email": "xxxxx@xxxx.xxx"
          }
        }
      ]
    }
    ```

- **Error Response:**

  - **Code:** 400 <br />
    **Description:** `"Student does not exist"`

  - **Code:** 400 <br />
    **Description:** `"Student has not a registration"`

  - **Code:** 400 <br />
    **Description:** `"you cant't checkin before your registration starting date"`

  - **Code:** 400 <br />
    **Description:** `"you cant't checkin after your registration ending date"`

  - **Code:** 400 <br />
    **Description:** `"You've reached the maximum capacity of checkins within 7 days"`
