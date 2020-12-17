import React from 'react'
import MaterialTable from 'material-table'
import PropTypes from 'prop-types'
import styles from './index.module.sass'
import { CustomTable } from '../table'
import { storeList } from '../../store'
import { storeTableTitles } from '../../pages/home/constants'
import { AddButton } from '../addButton'

const daata = [
    {
        id: 1,
        nickName: 'a',
        surname: 'Baran',
        userMobile: 1987,
        birthCity: 63,
        sex: 'Male',
        type: 'adult',
    },
    {
        id: 2,
        nickName: 'b',
        surname: 'Baran',
        userMobile: 1987,
        birthCity: 34,
        sex: 'Female',
        type: 'adult',
        parentId: 1,
    }
    ]

export const TreeTable = ({title, columns, data, openAddForm, openNestedAddForm}) => {
    
    const storeKeyIndexes = [0, 1, 4]

    return (
    <MaterialTable
        title={<TableHeader 
            title = {title}
            addClick = {openAddForm}
        />} 
        data={data}
        columns = {columns}
        detailPanel={rowData => {
            return (
                <CustomTable
                    tableContent = {storeList}
                    tableCellTitles = {storeTableTitles}
                    renderKeyIndexes = {storeKeyIndexes}
                    handleOpenForm = {openNestedAddForm}
                />
            )
        }}
        options={{
            search: false,
            showSelectAllCheckbox: false,
            paging: false,
            sorting: false,
        }}
    />
    )
}

TreeTable.propTypes = {
    title: PropTypes.string.isRequired,
    columns: PropTypes.array.isRequired,
    openAddForm: PropTypes.func,
    openNestedAddForm: PropTypes.func
}

const TableHeader = ({title, addClick}) => {
    return (
        <div className = {styles.tableHeaderCont}>
            <div className = {styles.tableHeaderTitle}>{title}</div>
            <div className = {styles.addButtonCont}>
                <AddButton onClick = {addClick}/>
            </div>
        </div>
    )
}

TableHeader.propTypes = {
    title: PropTypes.string.isRequired,
    addClick: PropTypes.func.isRequired
}
