var checkPhone= function(phone){ 
    if(!(/^1[34578]\d{9}$/.test(phone))){ 
        return false; 
    }else{
        return true;
    } 
}
function checkPassword(password){
    if(!(/^[\x21-\x7E]{6,20}$/.test(password))){
        return false; 
    }else{
        return true;
    } 
}
function strUrlChange(str){
    if(!str || typeof  str != "string")return "";
    return str.replace(/http:\/\/.*?\.(mp3|jpg|jpeg|png|gif)/ig, function(w){
        if(/mp3$/i.test(w)){
            return '<audio src="' + w + '"/>'
        }else{
            return '<img class="media-middle" style="max-width: 100%;" src="' + w + '"/>'
        }
    }).replace(/\n/g,"<br/>").replace(/text-decoration-line/g,"text-decoration");
}
export default{
	checkPhone,
	checkPassword,
    strUrlChange
}