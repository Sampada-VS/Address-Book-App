class AddressbookData{
    get id(){ return this._id; }
    set id(id){
        this._id=id;
    }
    get name(){ return this._name; }
    set name(name){
        this._name=name;
    }
    get tel(){ return this._tel; }
    set tel(tel){
        this._tel=tel;
    }
    get address(){ return this._address; }
    set address(address){
        this._address=address;
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
        this._zip=zip;
    }
    toString(){
        return "Id: "+this.id+", Full Name: "+this.name+", Phone No: "+this.tel+", Address: "+this.address+
        ", City: "+this.city+", State: "+this.state+", Zip code: "+this.zip;
    }
}