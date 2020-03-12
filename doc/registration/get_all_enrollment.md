# Consultar matriculas

Retorna todas as matriculas em aberto.

- **PATH** <br />
  /registration

- **Method** <br />
  `GET`

- **Success Response**

  - **Code**: 200 <br />
    **Description**:
    ```json
    {
      "registrations": [
        {
          "id": 1,
          "start_date": "xxxx-xx-xx",
          "end_date": "xxxx-xx-xx",
          "price": "129.00",
          "canceled_at": null,
          "createdAt": "xxxx-xx-xxTxx:xx:xx.xxxZ",
          "updatedAt": "xxxx-xx-xxTxx:xx:xx.xxxZ",
          "student_id": 1,
          "plan_id": 1,
          "student": {
            "id": 1,
            "name": "xxxx",
            "email": "xxxx@xxxx.xxx",
            "avatar": null
          },
          "plan": {
            "title": "xxxx",
            "duration": 1,
            "price": "xxx.xx"
          }
        }
      ]
    }
    ```
