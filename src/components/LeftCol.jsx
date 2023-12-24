import React from 'react'
import CardItem from './CardItem'
import AreaChartComponent from './AreaChartComponent'
import TableComponent from './TableComponent'

const LeftCol = () => {

    return (
        <div className='flex flex-col w-full justify-between p-2'>
            <div className='flex flex-col lg:flex-row w-full gap-2'>
                <CardItem />
                <CardItem />
                <CardItem />
            </div>
            <div className='flex-auto w-full'>
                <AreaChartComponent />
                <TableComponent />
            </div>
        </div>
    )
}

export default LeftCol