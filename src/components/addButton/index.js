import React from 'react'
import Icon from '@material-ui/core/Icon'
import { makeStyles } from '@material-ui/core/styles'
import { loadCSS } from 'fg-loadcss'
import PropTypes from 'prop-types'

export const AddButton = ({onClick}) => {

    React.useEffect(() => {
        const node = loadCSS(
            'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
            document.querySelector('#font-awesome-css'),
        )

        return () => {
            node.parentNode.removeChild(node)
        }
    }, [])

    const classes = useStyles()

    return (
        <div className = {classes.icons} onClick = {onClick}>
            <Icon className="fa fa-plus-circle" color="primary" fontSize = 'large'/>
        </div>
    )
}

AddButton.propTypes = {
    onClick: PropTypes.func.isRequired
}



const useStyles = makeStyles((theme) => ({
    icons: {
      transition: 'ease-in',
      transitionDuration: '1s',
      '& > .fa': {
        margin: theme.spacing(2),
      },
      cursor: 'pointer',
      '& :hover': {
        // backgroundColor: 'red'
      }
    } 
}))
  
