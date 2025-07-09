 const ApiKey = "AIzaSyCkrny7Tj80UHzTLnD1tpNklgVTUFgIb7Q";
 import moment from "moment/moment";

 export const value_convorter = (value) =>{
    if(value >= 1000000){
        return Math.floor(value/1000000) + "M";
    }else if(value >= 1000){
        return Math.floor(value / 1000) + "K";
    }else{
        return value;
    }
 }

export const dateConvorter = (date) =>{
    let videos_Date = "";
    if (moment(date).fromNow() == "a day ago") {
      return  videos_Date = "1 day ago";
    } else {
      return  videos_Date = moment(date).fromNow();
    }
}


 export default ApiKey;

