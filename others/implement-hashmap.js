class hashMap {
    constructor(){
        this.keyArray = [];
        this.valueArray = [];
    }
    addKeyValue(key, value){
        this.keyArray.push(key);
        this.valueArray.push(value);
    }
    findValue(key){
        let idx = this.keyArray.indexOf(key);
        if(idx!=-1){
            return this.valueArray[idx];
        }
        else{
            return -1;
        }
    }
}



let hashmapObj = new hashMap();
hashmapObj.addKeyValue(0,1)
hashmapObj.addKeyValue("hello","buzinga")
let res1 = hashmapObj.findValue("hello");
console.log(res1);