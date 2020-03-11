# Consulta de todos os agendamentos

Retorna todos os agendamentos que não foram cancelados

- **PATH** <br />
  /appointments

- **Method** <br />
  `GET`

- **Success Response**

  - **Code**: 200 <br />
    **Description**:
    ```json
    [
      {
        "past": true,
        "cancellable": false,
        "id": 1,
        "date": "xxxx-xx-xxTxx:xx:xx.xxxz",
        "provider": {
          "id": 1,
          "name": "xxxx",
          "avatar": {
            "url": "xxxxxxxx.jpg",
            "id": 1,
            "path": "xxxxxxx.jpg"
          }
        }
      }
    ]
    ```
