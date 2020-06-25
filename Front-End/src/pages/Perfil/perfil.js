import React from 'react';
import './styles.scss';
import HeaderHome from '../../components/HeaderHome';
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    FormGroup,
    Form,
    Input,
    Row,
    Col,
} from "reactstrap";

class Perfil extends React.Component {
    render() {
        return (
            <>
                <div className="background">
                    <HeaderHome />
                    <div className="content">
                        <Row>
                            <Col md="4">
                                <Card className="card-user">
                                    <div className="image">
                                        <img
                                            alt="..."
                                            src={require("../../assets/img/damir-bosnjak.jpg")}
                                        />
                                    </div>
                                    <CardBody>
                                        <div className="author">
                                            <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                                <img
                                                    alt="..."
                                                    className="avatar border-gray"
                                                    src={require("../../assets/img/mike.jpg")}
                                                />
                                                <h5 className="title">Mateus Santos</h5>
                                            </a>
                                            <button class="editar-foto" >Editar foto</button>
                                        </div>

                                    </CardBody>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <CardTitle tag="h4">Contatos</CardTitle>
                                    </CardHeader>
                                    <CardBody>
                                        <ul className="list-unstyled team-members">
                                            <li>
                                                <Row>
                                                    <Col md="2" xs="2">
                                                        <div className="avatar">
                                                            <img
                                                                alt="..."
                                                                className="img-circle img-no-padding img-responsive"
                                                                src={require("../../assets/img/faces/ayo-ogunseinde-2.jpg")}
                                                            />
                                                        </div>
                                                    </Col>
                                                    <Col md="7" xs="7">
                                                        Matheus Braga <br />
                                                        <span className="text-muted">
                                                            <small>Offline</small>
                                                        </span>
                                                    </Col>
                                                    <Col className="text-right" md="3" xs="3">
                                                        <Button
                                                            className="btn-round btn-icon"
                                                            color="success"
                                                            outline
                                                            size="sm"
                                                        >
                                                            <i className="fa fa-envelope" />
                                                        </Button>
                                                    </Col>
                                                </Row>
                                            </li>
                                            <li>
                                                <Row>
                                                    <Col md="2" xs="2">
                                                        <div className="avatar">
                                                            <img
                                                                alt="..."
                                                                className="img-circle img-no-padding img-responsive"
                                                                src={require("../../assets/img/faces/joe-gardner-2.jpg")}
                                                            />
                                                        </div>
                                                    </Col>
                                                    <Col md="7" xs="7">
                                                        Sonia Araujo <br />
                                                        <span className="text-success">
                                                            <small>Online</small>
                                                        </span>
                                                    </Col>
                                                    <Col className="text-right" md="3" xs="3">
                                                        <Button
                                                            className="btn-round btn-icon"
                                                            color="success"
                                                            outline
                                                            size="sm"
                                                        >
                                                            <i className="fa fa-envelope" />
                                                        </Button>
                                                    </Col>
                                                </Row>
                                            </li>
                                            <li>
                                                <Row>
                                                    <Col md="2" xs="2">
                                                        <div className="avatar">
                                                            <img
                                                                alt="..."
                                                                className="img-circle img-no-padding img-responsive"
                                                                src={require("../../assets/img/faces/clem-onojeghuo-2.jpg")}
                                                            />
                                                        </div>
                                                    </Col>
                                                    <Col className="col-ms-7" xs="7">
                                                        Adair Oliveira <br />
                                                        <span className="text-danger">
                                                            <small>Ocupado</small>
                                                        </span>
                                                    </Col>
                                                    <Col className="text-right" md="3" xs="3">
                                                        <Button
                                                            className="btn-round btn-icon"
                                                            color="success"
                                                            outline
                                                            size="sm"
                                                        >
                                                            <i className="fa fa-envelope" />
                                                        </Button>
                                                    </Col>
                                                </Row>
                                            </li>
                                        </ul>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="8">
                                <Card className="card-user">
                                    <CardHeader>
                                        <CardTitle tag="h5">Editar perfil</CardTitle>
                                    </CardHeader>
                                    <CardBody>
                                        <Form>
                                            <Row>
                                                <Col className="pr-1" md="6">
                                                    <FormGroup>
                                                        <label>Nome</label>
                                                        <Input
                                                            placeholder="Nome"
                                                            type="text"
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                <Col className="pl-1" md="6">
                                                    <FormGroup>
                                                        <label>Sobrenome</label>
                                                        <Input
                                                            placeholder="Sobrenome"
                                                            type="text"
                                                        />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col className="pr-1" md="7">
                                                    <FormGroup>
                                                        <label>Email</label>
                                                        <Input
                                                            placeholder="contato@email.com"
                                                            type="email"
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                <Col className="pl-1" md="4">
                                                    <FormGroup>
                                                        <label>Celular</label>
                                                        <Input
                                                            placeholder="(99)9999-9999"
                                                            type="tel"
                                                        />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md="px-1" md="8">
                                                    <FormGroup>
                                                        <label>Logradouro</label>
                                                        <Input
                                                            placeholder="Avenida, rua, travessa etc."
                                                            type="text"
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                <Col className="pl-1" md="3">
                                                    <FormGroup>
                                                        <label>Número</label>
                                                        <Input placeholder="número" type="number" />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md="px-1" md="6">
                                                    <FormGroup>
                                                        <label>Bairro</label>
                                                        <Input
                                                            placeholder="centro"
                                                            type="text"
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                <Col className="pl-1" md="6">
                                                    <FormGroup>
                                                        <label>Complementar</label>
                                                        <Input placeholder="andar, prédio etc" type="text" />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col className="pr-1" md="4">
                                                    <FormGroup>
                                                        <label>Cidade</label>
                                                        <Input
                                                            placeholder="Cidade"
                                                            type="text"
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                <Col className="px-1" md="4">
                                                    <FormGroup>
                                                        <label>Estado</label>
                                                        <select name="estados-brasil">
                                                            <option value="AC">Selecione</option>
                                                            <option value="AC">Acre</option>
                                                            <option value="AL">Alagoas</option>
                                                            <option value="AP">Amapá</option>
                                                            <option value="AM">Amazonas</option>
                                                            <option value="BA">Bahia</option>
                                                            <option value="CE">Ceará</option>
                                                            <option value="DF">Distrito Federal</option>
                                                            <option value="ES">Espírito Santo</option>
                                                            <option value="GO">Goiás</option>
                                                            <option value="MA">Maranhão</option>
                                                            <option value="MT">Mato Grosso</option>
                                                            <option value="MS">Mato Grosso do Sul</option>
                                                            <option value="MG">Minas Gerais</option>
                                                            <option value="PA">Pará</option>
                                                            <option value="PB">Paraíba</option>
                                                            <option value="PR">Paraná</option>
                                                            <option value="PE">Pernambuco</option>
                                                            <option value="PI">Piauí</option>
                                                            <option value="RJ">Rio de Janeiro</option>
                                                            <option value="RN">Rio Grande do Norte</option>
                                                            <option value="RS">Rio Grande do Sul</option>
                                                            <option value="RO">Rondônia</option>
                                                            <option value="RR">Roraima</option>
                                                            <option value="SC">Santa Catarina</option>
                                                            <option value="SP">São Paulo</option>
                                                            <option value="SE">Sergipe</option>
                                                            <option value="TO">Tocantins</option>
                                                        </select>
                                                    </FormGroup>
                                                </Col>
                                                <Col className="pl-1" md="4">
                                                    <FormGroup>
                                                        <label>CEP</label>
                                                        <Input placeholder="CEP" type="number" />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Col className="pl-1" md="4">
                                                    <FormGroup>
                                                        <button class="alterar-senha" type="button">Alterar Senha</button>
                                                    </FormGroup>
                                                </Col>
                                            <Row>
                                                <div className="update ml-auto mr-auto">
                                                    <Button
                                                        className="atualizar"
                                                        color="primary"
                                                        type="submit"
                                                    >
                                                        Atualizar
                                                    </Button>
                                                </div>
                                            </Row>
                                        </Form>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>
            </>
        );
    }
}

export default Perfil;
