import { useState } from "react";

const axios = require('axios')

export interface RespData {
    success: {
      total: number
    },
    contents: {
      translated: string,
      text: string,
      translation: string
    }
  }

export function YodaTranslator() {
    const defaultTranslate:RespData = {
        success: {
            total: 0
          },
          contents: {
            translated: "Lost a planet, master obiwan has.",
            text: "Master Obiwan has lost a planet",
            translation: "yoda"
          }
    }

    const [ newTranslate, setNewTranslate ] = useState<RespData>(defaultTranslate);
    const [ newError, setNewError ] = useState<boolean>(false)

    const requestTranslate = async (textToTranslate: string) => {

      let corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/'
      let yodaUrl = "https://api.funtranslations.com/translate/yoda.json"

      let finalUrl = corsAnywhereUrl + yodaUrl

        try {
          const response = await axios({
              method: "POST",
              url: finalUrl,
              headers: {
                "X-Requested-With" : ""
            },
              data: {
                  text: textToTranslate
              }
          })
          setNewError(false)
          setNewTranslate(response.data)
        } catch (error) {
          alert(error)
          setNewError(false)
          setNewError(true)
        }

    }

    return {
        newError,
        newTranslate,
        requestTranslate
    }

}
