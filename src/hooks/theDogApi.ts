import { useState } from "react";

const axios = require('axios')

export interface RespData {
  id: string,
  url: string,
  name: string,
  temperament: string
}

export function DiscoveryDog() {
    const defaultDog: RespData = {
      id: "yxsOLj-GU",
      url: "https://cdn2.thedogapi.com/images/yxsOLj-GU.jpg",
      name: "Bearded Collie",
      temperament: "Self-confidence, Hardy, Lively, Alert, Intelligent, Active"
    }

    const [ newDoggo, setNewDoggo ] = useState<RespData>(defaultDog);
    const [ newError, setNewError ] = useState<boolean>(false)

    const requestDoggo = async () => {

        let doggoUrl = "https://api.thedogapi.com/v1/images/search"

        try {
          const response = await axios({
              method: "GET",
              url: doggoUrl,
              headers: {
                "X-Requested-With" : "",
                //Not necessary
                "x-api-key" : "03d35c97-90be-47f4-880d-0a34bfd08339"
          }})

          setNewDoggo({
            id: response.data[0].id,
            url: response.data[0].url,
            name: response.data[0].breeds[0] ? response.data[0].breeds[0].name : "Doggo",
            temperament: response.data[0].breeds[0] ? response.data[0].breeds[0].temperament : "Horny"
          })
          setNewError(false)
        } catch (error) {
          alert(error)
          setNewError(false)
          setNewError(true)
        }

    }

    return {
        newError,
        newDoggo,
        requestDoggo
    }

}
