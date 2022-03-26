const { faker } = require('@faker-js/faker')
var cpf = require('gerador-validador-cpf')



export default {
    deliver: function () {

     const randomName = faker.name.findName();
        

        var data = {
            name: randomName,
            cpf: cpf.generate(),
            email: faker.internet.email(randomName),
            whatsapp: "11999999999",
            address: {
                postalcode: "26178405",
                street: "Rua São Benedito",
                number: "12",
                details: "casa",
                district: "São Vicente",
                city: "Belford Roxo/RJ"

            },

            delivery_method: "Moto",
            cnh: "cnh-digital.jpg"
        }
        return data
    }
}