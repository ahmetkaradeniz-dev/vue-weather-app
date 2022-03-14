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