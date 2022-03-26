import signup from '../pages/SignUpPage'
import SignupFactory from '../factories/SignupFactory'

describe('cadastro', () => {


    // beforeEach(function () {
    //     cy.fixture('deliver.json').then((d) => {
    //         this.deliver = d
    //     })
    // })


    it('usuario deve se tornar um entregador', function () {

        var deliver = SignupFactory.deliver()

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        //validacao modal
        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldbe(expectedMessage)
        cy.get('.swal2-container .swal2-confirm').click()


    })

    it('CPF Incorreto', function () {

        var deliver = SignupFactory.deliver()
        deliver.cpf = '12345678AAA'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        //validação Span Alert
        signup.alertShouldbe('Oops! CPF inválido')


    })


    it('Email Incorreto', function () {

        var deliver = SignupFactory.deliver()
        deliver.email = 'user.com.br'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        //validação Span Alert
        signup.alertShouldbe('Oops! Email com formato inválido.')


    })

    context('Campos Obrigatórios', function () {
        const messages = [{
                field: 'name',
                message: 'É necessário informar o nome'
            },
            {
                field: 'cpf',
                message: 'É necessário informar o CPF'
            },
            {
                field: 'email',
                message: 'É necessário informar o email'
            },
            {
                field: 'postalcode',
                message: 'É necessário informar o CEP'
            },
            {
                field: 'number',
                message: 'É necessário informar o número do endereço'
            },
            {
                field: 'delivery_method',
                message: 'Selecione o método de entrega'
            },
            {
                field: 'cnh',
                message: 'Adicione uma foto da sua CNH'
            }
        ]

        before(function () {
            signup.go()
            signup.submit()
        })

        messages.forEach(function (msg) {
            it(`${msg.field} é obrigatorio`, function () {
                signup.alertShouldbe(msg.message)
            })
        })
    })






})
