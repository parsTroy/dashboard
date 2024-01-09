import React from 'react'
import { StatusOnlineIcon } from "@heroicons/react/outline";
import {
    Badge,
    Card,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableRow,
    Text,
    Title,
} from "@tremor/react";
import mock from '../../mockapi.json'

const data = mock.stocks


const TableComponent = () => {
    return (
        <Card className='mt-3'>
            <Title>Portfolio</Title>
            <Table className="mt-5">
                <TableHead>
                    <TableRow>
                        <TableHeaderCell>Name</TableHeaderCell>
                        <TableHeaderCell>Ticker</TableHeaderCell>
                        <TableHeaderCell>Dividend</TableHeaderCell>
                        <TableHeaderCell>Percentage Change</TableHeaderCell>
                        <TableHeaderCell>Sentiment Score</TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((item) => (

                        <TableRow key={item.name}>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>
                                <Text>{item.ticker}</Text>
                            </TableCell>
                            <TableCell>
                                <Text>{item.dividend}</Text>
                            </TableCell>
                            <TableCell>
                                <Badge color={item.percentageChange >= 0 ? 'emerald' : 'red'} icon={StatusOnlineIcon}>
                                    {item.percentageChange}
                                </Badge>
                            </TableCell>
                            <TableCell>
                                <Text>{item.sentimentScore}</Text>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Card>
    )
}

export default TableComponent