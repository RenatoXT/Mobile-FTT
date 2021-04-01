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

        try {
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
        } catch (error) {
          alert("Esta aplicação utiliza o cors anywhere para acessar outras api's que não possuem cors, você está sem  acesso à essa plataforma! \nacesse o site para solicitar: \nhttps://cors-anywhere.herokuapp.com/corsdemo" )
          setNewTranslate(defaultTranslate)
        }

    }

    return {
        newTranslate,
        requestTranslate
    }

}
