# Mapa de alinhamento - Backend
adadasdasd

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

<br>
<br>
<br>

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

## DELETE - api/services/:id