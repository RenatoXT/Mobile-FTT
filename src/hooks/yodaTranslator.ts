import { useState } from "react";

const axios = require('axios')

export interface RespData {
    success: {
      total: number
    },
    contents: {
      translated: string,
      translation: string
    }
  }

export function yodaTranslator() {
    const defaultTranslate:RespData = {
        success: {
            total: 0
          },
          contents: {
            translated: "Lost a planet, master obiwan has.",
            translation: "yoda"
          }
    }

    const [ newTranslate, setNewTranslate ] = useState<RespData>(defaultTranslate);

    const requestTranslate = async (textToTranslate: string) => {

        let yodaUrl = "https://api.funtranslations.com/translate/yoda.json"

        const response = await axios({
            method: "POST",
            url: yodaUrl,
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
