import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/grafic.png';

import api from '../../services/api';
import formatValue from '../../utils/formatValue';

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
      <div className="box">
        <div className="box2">
        <div className="saldo">
          <p>Saldo Atual</p>
          <p>R$ 20.000,00</p>
        </div>

        <div className="box3">
          <Link to="/">
            <img src={Logo} alt=""/>
          </Link>
        </div>
        </div>

        <div className="recently">
          <div className="button1">    
            <button type="submit">Enviar</button>
            <button type="submit"><Link to="/import">Importar</Link></button>
          </div>

          <div className="button2">
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
      </div>
    </>
  );
}
export default Resume;