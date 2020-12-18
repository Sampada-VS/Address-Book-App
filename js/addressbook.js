class AddressbookData{
    get id(){ return this._id; }
    set id(id){
        this._id=id;
    }
    get name(){ return this._name; }
    set name(name){
        let nameRegex=RegExp('^[A-Z][a-z]{2,}\\s[A-Z][a-z]{2,}$');
        if(nameRegex.test(name))
            this._name=name;
        else
            throw "Name is incorrect.";
    }
    get tel(){ return this._tel; }
    set tel(tel){
        let telRegex1=RegExp('^[7-9]{1}[0-9]{9}$');
        let telRegex2=RegExp('^[1-9]{2}[7-9]{1}[0-9]{9}$');
        let telRegex3=RegExp('^[+][1-9]{2}[7-9]{1}[0-9]{9}$');

        if(telRegex1.test(tel) || telRegex2.test(tel) || telRegex3.test(tel))
            this._tel=tel;
        else
            throw "Phone Number is incorrect.";       
    }
    get address(){ return this._address; }
    set address(address){
        let addrRegex=RegExp('^(?=.*\\s)[A-Za-z]{3,}[A-Za-z\\s]{1,}$');
        if(addrRegex.test(address))
            this._address=address;
        else
            throw "Address is incorrect.";    
    }
    get city(){ return this._city; }
    set city(city){
        this._city=city;
    }
    get state(){ return this._state; }
    set state(state){
        this._state=state;
    }
    get zip(){ return this._zip; }
    set zip(zip){
        let pinCodeRegex=RegExp('^[1-9]{1}[0-9]{5}$');
        if(pinCodeRegex.test(zip))
            this._zip=zip;
        else
            throw "Zip Code is incorrect.";
    }
    toString(){
        return "Id: "+this.id+", Full Name: "+this.name+", Phone No: "+this.tel+", Address: "+this.address+
        ", City: "+this.city+", State: "+this.state+", Zip code: "+this.zip;
    }
}