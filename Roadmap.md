# Mapa de alinhamento - Backend

### Rotas de Cliente:

## GET - api/client/:phoneNumber

Response:
```
JSON

{ 
    error: Boolean, 
    message: String, 
    data: Object 
}
```

**Service:** Consulta no banco de dados se o número de telefone existe, caso positivo, entrega ao front os dados salvos do cliente, caso contrário, sinaliza que o cliente não existe. 

*Existe:*
```
JSON 

{
    name: String
    phone: Number
    address: String
    pet: {
        name: String,
        age: Number,
        personality: String,
        breed: String,
    }
}
```

*Não existe:*
```
null
```

<br>
<br>
<br>

### Rotas de Serviços



## POST - api/services/

Payload:
```
JSON

{
    name: String,
    duration: String,
    value: Number,
    isActive: Boolean
} 

```
Response:
```
JSON

{ 
    error: Boolean, 
    message: String, 
    data: Object 
}
```

**Service:** Cria um novo serviço
```
JSON

{
    name: String,
    duration: String,
    value: Number,
    isActive: Boolean
}
```

## GET - api/services/

Response:
```
JSON

{ 
    error: Boolean, 
    message: String, 
    data: Object 
}
```

**Service:** Retorna a lista de serviços ativos.
```
JSON

[
    {
        name: String,
        duration: String,
        value: Number,
        isActive: Boolean
    },
    {
        name: String,
        duration: String,
        value: Number,
        isActive: Boolean
    },
    {
        name: String,
        duration: String,
        value: Number,
        isActive: Boolean
    },
    ..
]
```

## PATCH - api/services/:id

Response:
```
JSON

{ 
  error: Boolean, 
  message: String, 
  data: Object 
}
```

**Service:** Altera um serviço já criado.
```
JSON

{ 
  error: Boolean, 
  message: String, 
  data: Object 
}
```

## DELETE - api/services/:id


Response:
```
JSON

{ 
  error: Boolean, 
  message: String, 
  data: Object 
}
```

**Service:** Deleta um serviço já criado.
```
JSON

{ 
  error: Boolean, 
  message: String, 
  data: Object 
}
```

<br>
<br>
<br>

### Rotas de Agenda:

## GET - api/schedule?date="16/09/2026"

> **Discutir**: Considernado que temos diversos serviços, irá acontecer que quando o cliente agendar mais de um serviço (Ex. Banho e tosa) a duração irá passar de 1h, e como o frontend mostra os horarios disponiveis para agendamento de hora em hora, precisamos elaborar uma logica que identifique que o serviço contratato irá ultrapassar a hora escolhida pelo cliente deixando a hora seguinte também indisponivel.


## POST - api/schedule/
Payload:
```
JSON

{
  clientName: String,
  address: String,
  phoneNumber: Number,
  pet: {
    Name: String,
    Age: String,
    personality: String,
    breed: String
  },
  schedule: {
    service: id,
    date: timestamp,
  }
} 

```
Response:
```
JSON

{ 
    error: Boolean, 
    message: String, 
    data: Object 
}
```

**Service:** Cria um novo agendamento
```
JSON

{
    id: String
}
```