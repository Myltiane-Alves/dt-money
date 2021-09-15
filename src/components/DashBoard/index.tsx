import React from 'react';
import { Summary } from '../Summary';
import { TransactionsTable } from '../TransactionsTable';
import { Container } from './styled';

export function DashBoard() {
    return(
        <Container>
            <Summary />
            <TransactionsTable />            
        </Container>
    )
}