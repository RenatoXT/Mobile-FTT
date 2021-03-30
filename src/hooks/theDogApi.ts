import { useState } from "react";

const axios = require('axios')

export interface RespData {
  breeds: [{}],
  id: string,
  url: string,
  width: number,
  height: number
}

export function DiscoveryDog() {
    const defaultDog: RespData = {
      breeds: [
        {
          weight: {
            imperial: "23 - 28",
            metric: "10 - 13"
          },
          height: {
            imperial: "15.5 - 20",
            metric: "39 - 51"
          },
          id: 111,
          name: "Finnish Spitz",
          bred_for: "Hunting birds, small mammals",
          breed_group: "Non-Sporting",
          life_span: "12 - 15 years",
          temperament: "Playful, Loyal, Independent, Intelligent, Happy, Vocal",
          reference_image_id: "3PjHlQbkV"
        }
      ],
      id: "R9ZzdMEnl",
      url: "https://cdn2.thedogapi.com/images/R9ZzdMEnl.jpg",
      width: 427,
      height: 640
    }

    const [ newDoggo, setNewDoggo ] = useState<RespData>(defaultDog);

    const requestDoggo = async () => {

        let corsAnywhereUrl = "https://cors-anywhere.herokuapp.com/"
        let doggoUrl = "https://api.thedogapi.com/v1/images/search"

        const response = await axios({
            method: "GET",
            url: corsAnywhereUrl + doggoUrl,
            headers: {
              "X-Requested-With" : ""
        }})

        setNewDoggo(response.data)
    }

    return {
        newDoggo,
        requestDoggo
    }

}
