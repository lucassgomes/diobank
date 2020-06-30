import React from 'react';

import './styles.scss';
import HeaderHome from '../HeaderHome';
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

class Carteira extends React.Component {
    render() {
        return (
            <>
                <div className="background">
                    <HeaderHome />
                    <div className="content">
                    <CardTitle tag="h2">Meus investimentos</CardTitle>
                    <CardBody></CardBody>
                    <p className="textoCarteira" tag="h4">Iglá, seu patrimônio hoje é de: <span className="precoInvestimento">R$15.023,98</span></p>
                    <p className="textoCarteira" tag="h4">Total Investido: <span className="precoInvestimento">R$14.000,00</span></p>
                        <Row>
                        <Card className="investimentos">
                            <CardBody>
                            <CardTitle tag="h5">Tesouro Direto</CardTitle>
                            </CardBody>
                            <Row className="rowInvestimento">
                            <p className="detalhesInvestimento1" >Valor acumulado</p>
                            <p className="detalhesInvestimento1" >Rendimento Bruto</p>
                            </Row>
                            <Row className="rowInvestimento">
                            <p className="detalhesInvestimentoValor1" ><span className="valorInvestir">R$100,00</span></p>
                            <p className="detalhesInvestimentoValor" ><span className="valorInvestir">R$7,75</span></p>
                            </Row>
                            <p className="detalhesInvestimento" ><span className="vencimentos">Vencimento em: 30/07/2020</span></p>
                        </Card>
                        <Card className="investimentos">
                            <CardBody>
                            <CardTitle tag="h5">CDB</CardTitle>
                            </CardBody>
                            <Row className="rowInvestimento">
                            <p className="detalhesInvestimento1" >Valor acumulado</p>
                            <p className="detalhesInvestimento1" >Rendimento Bruto</p>
                            </Row>
                            <Row className="rowInvestimento">
                            <p className="detalhesInvestimentoValor1" ><span className="valorInvestir">R$100,00</span></p>
                            <p className="detalhesInvestimentoValor" ><span className="valorInvestir">R$7,75</span></p>
                            </Row>
                            <p className="detalhesInvestimento" ><span className="vencimentos">Vencimento em: 30/07/2020</span></p>
                        </Card>
                        <Card className="investimentos">
                            <CardBody>
                            <CardTitle tag="h5">LCI LCA</CardTitle>
                            </CardBody>
                            <Row className="rowInvestimento">
                            <p className="detalhesInvestimento1" >Valor acumulado</p>
                            <p className="detalhesInvestimento1" >Rendimento Bruto</p>
                            </Row>
                            <Row className="rowInvestimento">
                            <p className="detalhesInvestimentoValor1" ><span className="valorInvestir">R$100,00</span></p>
                            <p className="detalhesInvestimentoValor" ><span className="valorInvestir">R$7,75</span></p>
                            </Row>
                            <p className="detalhesInvestimento" ><span className="vencimentos">Vencimento em: 30/07/2020</span></p>
                        </Card>
                        
                        </Row>
                    </div>
                </div>
            </>
        );
    }
}

export default Carteira;
