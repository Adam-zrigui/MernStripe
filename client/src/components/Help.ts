const API = 'http//:localhost:5500'

export default async function Fetcher(endpointURL : any , opts : any) {
 
    const {method = 'POST', body = null} = {...opts}
const res = await fetch(`${API}/${endpointURL}`, {
    method,
    ...(body && { body: JSON.stringify(body)}),
    headers: {
        'Content-Type': 'application/json'
    
    },

})
console.log(endpointURL)
return res.json();
}


