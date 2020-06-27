import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
import { Line } from "react-chartjs-2";
import api from '../../services/api';
import formatValue from '../../utils/formatValue';
import {
  dashboardNASDAQChart,
} from "../../variables/charts.js";

import './styles.scss';

interface Transaction {
  id: string;
  title: string;
  value: number;
  formattedValue: string;
  formattedDate: string;
  type: 'income' | 'outcome';
  category: { title: string };
  created_at: Date;
}

interface Balance {
  income: string;
  outcome: string;
  total: string;
}

const Resume: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [balance, setBalance] = useState<Balance>({} as Balance);

  useEffect(() => {
    async function loadTransactions(): Promise<void> {
      const response = await api.get('/transactions');

      const TransactionTransform = response.data.transactions.map(
        (transaction: Transaction) => ({
          ...transaction,
          formattedValue: formatValue(transaction.value),
          formattedDate: new Date(transaction.created_at).toLocaleDateString(
            'pt-br',
          ),
        }),
      );
      const BalanceTransform = {
        income: formatValue(response.data.balance.income),
        outcome: formatValue(response.data.balance.outcome),
        total: formatValue(response.data.balance.total),
      };

      setTransactions(TransactionTransform);
      setBalance(BalanceTransform);
    }
    loadTransactions();
  }, []);

  return (
    <>
    <h2 className="user">Bem vindo, Iglá Generoso!</h2>
      <div className="boxprincipal">
        <Row className="ajustDashboard">
        <Col md="6">
              <Card className="card-chart">
                <CardHeader>
                  <CardTitle tag="h5">NASDAQ: AAPL</CardTitle>
                  <p className="card-category">Line Chart with Points</p>
                </CardHeader>
                <CardBody>
                  <Line
                    data={dashboardNASDAQChart.data}
                    options={dashboardNASDAQChart.options}
                    width={400}
                    height={100}
                  />
                </CardBody>
                <CardFooter>
                  <div className="chart-legend">
                    <i className="fa fa-circle text-success" /> Tesla Model S{" "}
                    <i className="fa fa-circle text-danger" /> BMW 5 Series
                  </div>
                  <hr />
                  <div className="card-stats">
                    <i className="fa fa-check" /> Data information certified
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col md="6">
          <div className="box4">
            <div className="teste">
              <p>Saldo Atual - R$ 20.000,00</p>
            </div>
          </div>
          <div className="recently2">
            <div className="button1">    
              <button type="submit">Enviar</button>
              <button type="submit"><Link to="/import">Importar</Link></button>
              <button type="submit">...</button>
            </div>
          </div>
          <div className="transactions">
        <table>
            <thead>
              <tr>
                <th>Titulo</th>
                <th>Preço</th>
                <th>Categoria</th>
                <th>Data</th>
              </tr>
            </thead>

            <tbody>
                <tr>
                  <td>conta luz</td>
                  <td>
                    28,90
                  </td>
                  <td>boleto</td>
                  <td>28-12-1999</td>
                </tr>
            </tbody>
          </table>
        </div>
        </Col>
        </Row>
      </div>
    </>
  );
}
export default Resume;