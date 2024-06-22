export const API_KEY = 'AIzaSyC679mRHHI8ucM0dJ511DXK_SdicxpP3EA';

export const value_converter = (value)=>{
    if(value>=1000000){
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000){
        return Math.floor(value/1000)+"k"
    }
    else{
        return value;
    }
}