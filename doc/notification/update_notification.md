# Atualiza uma notificação

Atualiza uma notificação para lida

- **PATH** <br />
  /notification/{id}

- **Method** <br />
  `PUT`

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
      "read": true,
      "_id": "xxxxxxxx",
      "content": "xxxxxxxx",
      "user": 6,
      "createdAt": "xxxx-xx-xxTxx:xx:xx.xxxZ",
      "updatedAt": "xxxx-xx-xxTxx:xx:xx.xxxZ",
      "__v": 0
    }
    ```
