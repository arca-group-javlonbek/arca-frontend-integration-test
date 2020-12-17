import React from 'react'
import styles from './index.module.sass'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import PhotoCamera from '@material-ui/icons/PhotoCamera'
import { Button } from '@material-ui/core'
import { lang } from '../../../languages/lang'

export const PartnerForm = () => {

    // const []

    return (
        <div className = {styles.cont}>
            <TextField margin = 'dense' id="outlined-basic" label={lang.forms.partner.opName} variant="outlined" />
            {/* <TextField margin = 'dense' id="outlined-basic" label={lang.forms.partner.opLogo} variant="outlined" /> */}
            <TextField margin = 'dense' id="outlined-basic" label={lang.forms.partner.cityAddress} variant="outlined" />
            <TextField margin = 'dense' id="outlined-basic" label={lang.forms.partner.contactManager} variant="outlined" />
            <TextField margin = 'dense' id="outlined-basic" label={lang.forms.partner.contactMob} variant="outlined" />
            <div className = {styles.inputUploadCont}>
                <input accept="image/*" className={styles.input} id="icon-button-file" type="file" />
                <div className = {styles.inputUploadTitle}>{lang.forms.partner.opLogo}</div>
                <label htmlFor="icon-button-file">
                    <IconButton color="primary" aria-label="upload picture" component="span">
                        <PhotoCamera />
                    </IconButton>
                </label>
            </div>
            <div className = {styles.buttonCont}>
                <Button size = 'small' variant="contained" color="primary">{lang.forms.partner.add}</Button>
            </div>
        </div>
    )
}