import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { AddButton } from '../addButton'

  function EnhancedTableHead({classes, tableTitles}){
    return (
      <TableHead>
        <TableRow className = {classes.headTableRow}>
            {tableTitles.map((item, index) => 
            <TableCell
                align={index === 0 ? 'left': 'right'} 
                padding='default'
                className={classes.tableCellItems}
            >
                {item.name}
            </TableCell>
            )}
        </TableRow>
      </TableHead>
    )
  }
  
  EnhancedTableHead.propTypes = {
    classes: PropTypes.object.isRequired,
  }
  
  
  export const CustomTable = ({ 
    tableContent, 
    tableTitle, 
    tableCellTitles, 
    handleRowClick,
    renderKeyIndexes, 
    childComponent,
    handleOpenForm,
    accordion 
  }) => {

    const [storeIndex, setStoreIndex] = useState(undefined)
    
    const classes = useStyles()

    let renderItem = []

    const handleChooseStore = index => setStoreIndex(index)
    
    const handleClick = name => {
        handleRowClick && handleRowClick(name)
    }
  
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <div className = {classes.tableHeadCont}>
            <div className={classes.title}>{tableTitle}</div>
            <AddButton
              onClick = {handleOpenForm}
            />
          </div>
          <TableContainer>
            <Table
              className={classes.table}
              aria-labelledby="tableTitle"
              size='medium'
              aria-label="enhanced table"
            >
              <EnhancedTableHead
                classes={classes}
                tableTitles={tableCellTitles}
              />
              <TableBody>
                {tableContent
                  .map((item, index) => {
                      renderItem = Object.values(item)
                      if (!accordion) {
                        return (
                          <TableRow
                            hover = {handleRowClick ? true : false}
                            className = {classes.tableRow}
                            onClick={() => handleClick(renderItem[renderKeyIndexes[0]])}
                            tabIndex={-1}
                            key={renderItem[renderKeyIndexes[0]]}
                          >
                            {renderKeyIndexes.map((item, index) => 
                              <TableCell align={index === 0 ? 'left' : 'right'}>{renderItem[renderKeyIndexes[index]]}</TableCell>
                            )}
                          </TableRow>
                        )
                      } else {
                        return (
                          <>
                            <TableRow
                              hover
                              className = {classes.tableRow}
                              onClick={() => handleChooseStore(index)}
                              tabIndex={-1}
                              key={renderItem[renderKeyIndexes[0]]}
                            >
                              {renderKeyIndexes.map((item, index) => 
                                <TableCell align={index === 0 ? 'left' : 'right'}>{renderItem[renderKeyIndexes[index]]}</TableCell>
                              )}
                            </TableRow>
                            {storeIndex === index && <div className = {classes.accordionCont}>
                              {childComponent}
                            </div>}
                          </>
                        )
                      }
                    }
                  )}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </div>
    )
  }

  CustomTable.propTypes = {
        tableContent: PropTypes.array.isRequired,
        tableTitle: PropTypes.string,
        tableCellTitles: PropTypes.array.isRequired,
        renderKeyIndexes: PropTypes.array.isRequired,
        handleRowClick: PropTypes.func,
        childComponent: PropTypes.element,
        handleOpenForm: PropTypes.func,
        accordion: PropTypes.bool
  }


  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
      padding: '1em'
    },
    paper: {
      width: '100%',
    //   padding: '1em',
      margin: theme.spacing(2),
    },
    tableHeadCont: {
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between',
    },
    title: {
        width: '100%',
        padding: '1em',
        fontSize: '1.4em',
        fontWeight: 'bold'
    },
    tableCellItems: {
        fontSize: '1.2em',
        color: '#00000070',
        textTransform: 'capitalize'
    },
    table: {
      minWidth: 750,
    },
    headTableRow: {
      // backgroundColor: 'red',
      // width: '100%',
      // display: 'flex',
      // justifyContent: 'space-between'
    },
    tableRow: {
        cursor: 'pointer'
    },
    accordionCont: {
      width: '100%'
    },
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
    },
  }))
  
