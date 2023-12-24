import React from 'react'
import { Card, Metric, Text, Flex, BadgeDelta } from '@tremor/react'

const CardItem = () => {
    return (
        <Card
            className='w-xs'
            decoration='top'
            decorationColor='indigo'
        >
            <Flex justifyContent='between' alignItems='center'>
                <Text>Sales</Text>
                <BadgeDelta deltaType={'moderateIncrease'}>+12%</BadgeDelta>
            </Flex>
            <Metric>$34,742</Metric>
        </Card>
    )
}

export default CardItem