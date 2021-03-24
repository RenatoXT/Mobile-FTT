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

    const requestTranslate = async (textToTranslate: string) => {

        let corsAnywhereUrl = "https://cors-anywhere.herokuapp.com/"
        let yodaUrl = "https://api.funtranslations.com/translate/yoda.json"

        const response = await axios({
            method: "POST",
            url: corsAnywhereUrl + yodaUrl,
            headers: {
              "X-Requested-With" : ""
          },
            data: {
                text: textToTranslate
            }
        })

        setNewTranslate(response.data)
    }

    return {
        newTranslate,
        requestTranslate
    }

}
