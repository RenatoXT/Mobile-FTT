import { useState } from "react";

const axios = require('axios')

export interface RespData {
  id: string,
  url: string,
  width: number,
  height: number,
  name: string,
  temperament: string
}

export function DiscoveryDog() {
    const defaultDog: RespData = {
      id: "yxsOLj-GU",
      url: "https://cdn2.thedogapi.com/images/yxsOLj-GU.jpg",
      width: 1080,
      height: 1319,
      name: "Bearded Collie",
      temperament: "Self-confidence, Hardy, Lively, Alert, Intelligent, Active"
    }

    const [ newDoggo, setNewDoggo ] = useState<RespData>(defaultDog);

    const requestDoggo = async () => {

        let corsAnywhereUrl = "https://cors-anywhere.herokuapp.com/"
        let doggoUrl = "https://api.thedogapi.com/v1/images/search"

        try {
          const response = await axios({
              method: "GET",
              url: corsAnywhereUrl + doggoUrl,
              headers: {
                "X-Requested-With" : ""
          }})

          setNewDoggo({
            id: response.data[0].id,
            url: response.data[0].url,
            width: response.data[0].width,
            height: response.data[0].height,
            name: response.data[0].breeds[0] ? response.data[0].breeds[0].name : "Doggo",
            temperament: response.data[0].breeds[0] ? response.data[0].breeds[0].temperament : "Horny"
          })
        } catch (error) {
          alert("Esta aplicação utiliza o cors anywhere para acessar outras api's que não possuem cors, você está sem  acesso à essa plataforma! \nacesse o site para solicitar: \nhttps://cors-anywhere.herokuapp.com/corsdemo" )
          setNewDoggo(defaultDog)
        }

    }

    return {
        newDoggo,
        requestDoggo
    }

}
