import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
  
  function EnhancedTableHead({classes, tableTitles}){
  
    return (
      <TableHead>
        <TableRow>
            {tableTitles.map((item) => 
            <TableCell
                align='right'
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
  
  
  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
      padding: '1em'
    },
    paper: {
      width: '60%',
    //   padding: '1em',
      margin: theme.spacing(2),
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
    tableRow: {
        cursor: 'pointer'
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
  
  export const CustomTable = ({tableContent, tableTitle, tableCellTitles}) => {
    const classes = useStyles()
  
    const handleClick = (name) => {
        console.log(name)
    }
  
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
            <div className={classes.title}>{tableTitle}</div>
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
                  .map((partner) => {
                    return (
                      <TableRow
                        hover
                        className = {classes.tableRow}
                        onClick={() => handleClick(partner.opName)}
                        tabIndex={-1}
                        key={partner.opName}
                      >
                        <TableCell component="th" scope="row" padding="default">
                          {partner.opName}
                        </TableCell>
                        <TableCell align="right">{partner.cityAddress}</TableCell>
                        <TableCell align="right">{partner.contactMob}</TableCell>
                      </TableRow>
                    )
                  })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </div>
    )
  }

  Table.propTypes = {
        tableContent: PropTypes.array.isRequired,
        tableTitle: PropTypes.string.isRequired,
        tableCellTitles: PropTypes.array.isRequired
  }

