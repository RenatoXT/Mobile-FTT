import { useState } from "react";

const axios = require('axios')

export interface Insult {
    number: number,
    language: string,
    insult: string,
    created: string,
    shown: number,
    createdby: string,
    active: number,
    comment: string
  }

export function GetInsult() {
    const defaultInsult:Insult = {
        number: 0,
        language: '06/06/666',
        insult: "Good work! You are so boring that being you is a insult",
        created: '06/06/666',
        shown: 0,
        createdby: '06/06/666',
        active: 0,
        comment: '06/06/666'
    }

    const [ newInsult, setNewInsult ] = useState<Insult>(defaultInsult);
    const [ newError, setNewError ] = useState<boolean>(false)

    const requestInsult = async () => {

        let corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/'
        let niceGuyUrl = "https://evilinsult.com/generate_insult.php?lang=en&type=json"

        let finalUrl = corsAnywhereUrl + niceGuyUrl


        try {
            const response = await axios({
                method: "Get",
                url: finalUrl,
                headers: {
                    'X-Requested-With' : ''
                }
            })

            setNewInsult(response.data)

          } catch (error) {
            alert("This application uses cors anywhere to access other api's via proxy, you don't have access to that platform! \nAccess the site to request it: \nhttps://cors-anywhere.herokuapp.com/corsdemo" )
            setNewError(true)
          }
    }

    return {
        newError,
        newInsult,
        requestInsult
    }

}
