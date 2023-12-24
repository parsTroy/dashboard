import React from 'react'
import SalesItem from './SalesItem'
import WebAnalytics from './WebAnalytics'
import CustomList from './CustomList'

const RightCol = () => {
    return (
        <div className='w-full p-2'>
            <SalesItem />
            <WebAnalytics />
            <CustomList />
        </div>
    )
}

export default RightCol