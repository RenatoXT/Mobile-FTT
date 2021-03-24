import { useState } from "react";

const axios = require('axios')

export interface ChuckJokes {
    categories: [],
    created_at: string,
    icon_url: string,
    id: string,
    updated_at: string,
    url: string,
    value: string
  }

export function GetChuckJokes() {

    const defaultChuckJokes:ChuckJokes = {
        categories: [],
        created_at: "2020-01-05 13:42:29.296379",
        icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        id: "QlalY5D_T869r5Rmeu1lfw",
        updated_at: "2020-01-05 13:42:29.296379",
        url: "https://api.chucknorris.io/jokes/QlalY5D_T869r5Rmeu1lfw",
        value: "Mr. Miyagi may be able to catch a fly with chopsticks but Chuck Norris eats soup with his."
      }

    const [ newChuckJokes, setNewChuckJokes ] = useState<ChuckJokes>(defaultChuckJokes);

    const requestChuckJokes = async () => {

        let corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/'
        let niceGuyUrl = "https://api.chucknorris.io/jokes/random"

        let finalUrl = corsAnywhereUrl + niceGuyUrl

        const response = await axios({
            method: "Get",
            url: finalUrl,
            headers: {
                'X-Requested-With' : ''
            }
        })

        setNewChuckJokes(response.data)
    }

    return {
        newChuckJokes,
        requestChuckJokes
    }

}
