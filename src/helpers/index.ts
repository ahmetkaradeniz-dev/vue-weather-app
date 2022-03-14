import type Ilocation from "@/interfaces/parameters/ILocation";

export const getLocation = () => new Promise<Ilocation>((resolve:any,reject:any) => {
    try{
        navigator.geolocation.getCurrentPosition(function(position){
            resolve({lat:position.coords.latitude,lon: position.coords.longitude})
        })
    }catch(e){
        reject(e)
    }
})

export const getWeatherIcon = (id:number) :string => {
    let iconPath = ''
    if(id > 199 && id < 233){
        iconPath = '../assets/icons/weather/thunderstorm.svg'
    }else if((id >299 && id < 322) || (id > 499 && id < 532)){
        iconPath = '../assets/icons/weather/rain.svg'
    }else if(id > 599 && id < 623){
        iconPath = '../assets/icons/weather/snow.svg'
    }else{
        iconPath = '../assets/icons/weather/cloud.svg'
    }
    return iconPath
}