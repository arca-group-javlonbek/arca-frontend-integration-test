const axios = require('axios')

export const apiUrles = {
    partner: '/partner',
    merchant: '/merchant'
}


export const Api = async(url, data = null, type = 'get', token = null) => {

    var response = {}
    if (type === 'get') {
        try {
            response = await axios.get(`http://10.0.2.109:3000/openapi${url}`);
        } catch (error) {
            response = error
        }
        // axios.get(`http://10.0.2.109:3000/openapi${url}`)
        // .then((res) => {
        //     // handle success
        //     console.log(res)
        //     response = {...res}
        // })
        // .catch((error) => {
        //     // handle error
        //     response = error
        // })
        // .then(() => {
        //     // always executed
        // })
    }
    if (type === 'post') {
        try {
            response = await axios.post(`http://10.0.2.109:3000/openapi${url}`, data)
            
        } catch (error) {
            response = error
        }
        
    }
    return response

}