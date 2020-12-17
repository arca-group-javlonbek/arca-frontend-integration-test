export const apiUrles = {
    partner: '/partner'
}


export const Api = (url, data = null, type = 'GET', token = null) => {

    let opts = {
        method: type,
        redirect: 'follow',
        headers: {
            'Content-Type': 'application/json',
        },
    }

    if (data) {
        opts.body = data
    } 
    // if (token) {
    //     opts.headers = {
    //         "Authorization": `Bearer ${token}`
    //     }
    // }

    return fetch(`https://10.0.2.109:3000/openapi${url}`, opts)
        .then(res => res.json())
        .catch(err => {
                console.log(err)
                console.log('erro')
            }
        )

}