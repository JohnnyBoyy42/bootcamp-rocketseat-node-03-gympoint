# Upload de arquivo

Faz upload de arquivo para aplicação

- **PATH** <br />
  /files

- **Method** <br />
  `POST`

- **Parameters** <br />

  &emsp;**Consumes** <br />
  &emsp;&ndash; multipart/form-data

  &emsp;**Properties**

  ```json
  {
    "file": {
      "type": file
    }
  }
  ```

- **Success Response**

  - **Code**: 200 <br />
    **Description**:
    ```json
    {
      "id": 1,
      "name": "xxxxx.jpg",
      "path": "xxxxx.jpg",
      "updatedAt": "xxxx-xx-xxTxx:xx:xx.xxxz",
      "createdAt": "2019-07-30T00:28:35.296Z"
    }
    ```
