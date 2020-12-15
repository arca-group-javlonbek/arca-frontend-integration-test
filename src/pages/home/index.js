import React from 'react'
import { partnerTableTitles, tableTitlePartner } from './constants'
import { partList } from '../../store'
import styles from './index.module.sass'
import { CustomTable } from '../../components/table'
  

export const Home = () => {
    return (
        <div className = {styles.cont}>
            <CustomTable
                tableContent = {partList}
                tableTitle = {tableTitlePartner}
                tableCellTitles = {partnerTableTitles}
            />
        </div>
    )
}
