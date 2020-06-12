import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

chai.use(chaiHttp);
chai.should();

const app = 'http://localhost:3002';

describe('Deve retornar erro 404 ao se acessar a rota raiz', () => {
    it('Post to /', () => {
        chai.request(app).post('/').end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(404);
        })
    });

    it('Get to /', () => {
        chai.request(app).get('/').end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(404);
        })
    })
})

describe('Ao se enviar um objeto ele deve retornar sucesso', () => {
    it('Singup', () => {
        const user = {
            fullname: 'Rogerio Caetano',
            email: 'rogerio@teste.com.br',
            password: '123445'
        };

        chai.request(app).post('/signup').send(user).end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(201);
        })
    })
})