export const API_KEY = 'AIzaSyDX_3cze7v8lhypa0zgcdv62CzF8qzgbeY';

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