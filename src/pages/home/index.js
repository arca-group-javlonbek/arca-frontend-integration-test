import React, { useEffect, useState } from 'react'
import { partnerTableTitles, tableTitle, merchantTableColumns, storeTableTitles } from './constants'
import { merchantList, partList, setPartList, storeList } from '../../store'
import styles from './index.module.sass'
import { CustomTable } from '../../components/table'
import { makeStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Paper from '@material-ui/core/Paper'
import Draggable from 'react-draggable'
import TextField from '@material-ui/core/TextField'
import { TreeTable } from '../../components/treeTable'
import { ModalForm } from '../../components/modalForm'
import { PartnerForm } from '../../components/forms/partnerForm'
import { lang } from '../../languages/lang'
import { Api, apiUrles } from '../../api'
import { observer } from 'mobx-react'
  

function PaperComponent(props) {
    return (
      <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
        <Paper {...props} />
      </Draggable>
    )
  }

export const Home = observer(() => {

    useEffect(async () => {
            const res = await Api(apiUrles.partner)
            if (res.status === 200) {
                console.log(res)
                setPartList(res)
            } else {
                console.log(res)
                alert(res.toString())
            }
    },[])

    const [openMerchant, setMerchant] = useState(false)

    const [partnerForm, setPartnerForm] = useState(false)

    const [merchantForm, setMerchantForm] = useState(false)

    const [storeForm, setStoreForm] = useState(false)

    const [openStore, setStore] = useState(false)

    const [idPartner, setIdPartner] = useState('')

    const classes = useStyles()

    const partnerKeyIndexes = [3, 5, 6, 7]

    const handleOpenMerchant = idPartner => {
        setMerchant(true)
        setIdPartner(idPartner)
    }

    const handleCloseMerchant = () => {
        setMerchant(false)
    }

    const handleOpenPartnerForm = () => {
        setPartnerForm (true)
    }

    const handleClosePartnerForm  = () => {
        setPartnerForm (false)
    }    

    const handleOpenMerchantForm = () => {
        setMerchantForm (true)
    }

    const handleCloseMerchantForm  = () => {
        setMerchantForm (false)
    }   

    const handleOpenStoreForm = () => {
        setStoreForm (true)
    }

    const handleCloseStoreForm  = () => {
        setStoreForm (false)
    }  



    return (
        <div className = {styles.cont}>
            <CustomTable
                tableContent = {partList.data}
                tableTitle = {tableTitle.partner}
                tableCellTitles = {partnerTableTitles}
                handleRowClick = {handleOpenMerchant}
                renderKeyIndexes = {partnerKeyIndexes}
                handleOpenForm = {handleOpenPartnerForm}
            />
            <Dialog
                open={openMerchant}
                onClose={handleCloseMerchant}
                PaperComponent={PaperComponent}
                aria-labelledby="draggable-dialog-title"
                fullWidth = {true}
                maxWidth = 'lg'
            >
                <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <TreeTable
                            title = {tableTitle.merchant}
                            columns = {merchantTableColumns}
                            openAddForm = {handleOpenMerchantForm}
                            openNestedAddForm = {handleOpenStoreForm}
                            idPartner = {idPartner}
                        />
                    </DialogContentText>
                </DialogContent>
            </Dialog>
            <ModalForm
                title = {lang.forms.partner.addPartner}
                open = {partnerForm}
                handleClose = {handleClosePartnerForm}
            >
                <PartnerForm/>
            </ModalForm>
            <ModalForm
                title = {tableTitle.merchant}
                open = {merchantForm}
                handleClose = {handleCloseMerchantForm}
            >
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email Address"
                    type="email"
                    fullWidth
                />
            </ModalForm>
            <ModalForm
                title = {tableTitle.store}
                open = {storeForm}
                handleClose = {handleCloseStoreForm}
            >
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email Address"
                    type="email"
                    fullWidth
                />
            </ModalForm>
        </div>
    )
})

const useStyles = makeStyles((theme) => ({
    dialogCont: {
        // width: '100%'
    }
}))