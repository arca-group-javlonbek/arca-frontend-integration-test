import React, { useEffect } from 'react'
import MaterialTable from 'material-table'
import PropTypes from 'prop-types'
import styles from './index.module.sass'
import { CustomTable } from '../table'
import { merchantList, setMerchantList, storeList } from '../../store'
import { storeTableTitles } from '../../pages/home/constants'
import { AddButton } from '../addButton'
import { Api, apiUrles } from '../../api'
import { observer } from 'mobx-react'

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

export const TreeTable = observer(({title, columns, openAddForm, openNestedAddForm, idPartner}) => {

    useEffect( async() => {
        const resMerchant = await Api(apiUrles.merchant)
        if (resMerchant.status === 200) {
            console.log(resMerchant)
            setMerchantList(resMerchant)
        } else {
            console.log(resMerchant)
            alert(resMerchant.toString())
        }
        console.log('asdasda', idPartner)
    }, [])
    
    const storeKeyIndexes = [0, 1, 4]

    const filteredMerchant = merchantList.data.filter(merchant => merchant.thirdOpMapId === idPartner)

    const handleDetailClick = rowData => {
        console.log(rowData)
        return (
            <div>asdfas</div>
            // <CustomTable
            //     tableContent = {storeList}
            //     tableCellTitles = {storeTableTitles}
            //     renderKeyIndexes = {storeKeyIndexes}
            //     handleOpenForm = {openNestedAddForm}
            // />
        )
    }

    return (
    <MaterialTable
        title={<TableHeader 
            title = {title}
            addClick = {openAddForm}
        />} 
        data={filteredMerchant}
        columns = {columns}
        detailPanel={handleDetailClick}
        options={{
            search: false,
            showSelectAllCheckbox: false,
            paging: false,
            sorting: false,
        }}
    />
    )
})

TreeTable.propTypes = {
    title: PropTypes.string.isRequired,
    columns: PropTypes.array.isRequired,
    idPartner: PropTypes.string.isRequired,
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
