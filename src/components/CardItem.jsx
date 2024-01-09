import React from 'react'
import { Card, Metric, Text, Flex, BadgeDelta } from '@tremor/react'
import mock from '../../mockapi.json'


const CardItem = () => {
    const stocks = mock.stocks;

    return (
        <>
            {stocks.map((stock, index) => (
                <Card key={index} className='w-xs' decoration='top' decorationColor='indigo'>
                    <Flex justifyContent='between' alignItems='center'>
                        <Text>{stock.name}</Text>
                        <BadgeDelta deltaType={stock.percentageChange >= 0 ? 'moderateIncrease' : 'moderateDecrease'}>
                            {stock.percentageChange}%
                        </BadgeDelta>
                    </Flex>
                    <Metric>{`$${stock.sentimentScore}`}</Metric>
                </Card>
            ))}
        </>
    );
};

export default CardItem;