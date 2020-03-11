# Consulta notificações

Consulta todas notificações de um fornecedor de serviço

- **PATH** <br />
  /notification

- **Method** <br />
  `GET`

- **Success Response**

  - **Code**: 200 <br />
    **Description**:
    ```json
    [
      {
        "read": false,
        "_id": "xxxxx",
        "content": "xxxxxxxxxxxxxx",
        "user": 6,
        "createdAt": "xxxx-xx-xxTxx:xx:xx.xxxZ",
        "updatedAt": "xxxx-xx-xxTxx:xx:xx.xxxZ",
        "__v": 0
      }
    ]
    ```

- **Error Response:**

  - **Code:** 401 <br />
    **Description:** `"Only providers can see notifications"`
