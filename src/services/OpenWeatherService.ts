import type Ilocation from "@/interfaces/parameters/ILocation";
import type IQuery from "@/interfaces/parameters/IQuery";
import type IWeatherService from "@/interfaces/services/IWeatherService";

class OpenWeatherService implements IWeatherService {
    apiUrl: string;
    apiKey: string;

    constructor() {
        this.apiKey = '11f5caf18db8b44ea88cc70474ff3c09'
        this.apiUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&lang=tr&`
    }

    async getLocation(p: Ilocation) {
        const endpoint = `lat=${p.lat}&lon=${p.lon}`
        const response = await fetch(this.apiUrl + endpoint)
        return await response.json()
    }

    async getQuery(p:IQuery){
        const endpoint = `q=${p.query}`
        const response = await fetch(this.apiUrl + endpoint)
        return await response.json()
    }

}

export default new OpenWeatherService()