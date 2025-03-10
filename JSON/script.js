const objs = [

    {
        nome: "Alvaro",
        idade: 30,
        esta_trabalhando: true,
        hobbies: [1, "abc"],
        detalhes_profissao: {
            profissao: "professor",
            empresa: "uninorte"
        }
    }, 

    {
        "nome": "Joao",
        "idade": 30,
        "esta_trabalhando": false,
        "hobbies": [1, "abc"],
        "detalhes_profissao": {
            "profissao": "professor",
            "empresa": "uninorte"
        }
    }

]

console.log(objs)

//JSON
//converter objeto para json
const jsonData = JSON.stringify(objs)

console.log(jsonData)
console.log(typeof jsonData)

// converter json para objeto

const objData = JSON.parse(jsonData);

console.log(objData)
console.log(typeof objData)