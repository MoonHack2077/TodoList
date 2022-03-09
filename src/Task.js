class Task{
    constructor( {title , id, description} ){
        this.title=title;
        this.description=description;
        this.id=id;
        this.done=false;
    }
    // check(){
    //     this.done= !this.done;
    // }
}

export { Task }