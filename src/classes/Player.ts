export class Player {
    pseudo: string;
    firstname: string;
    lastname: string;
    email: string;

    constructor(pseudo: string, firstname: string, lastname: string, email: string){
        this.pseudo = pseudo;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
    }

    getName(){
        console.log(this.firstname + " est en cours d'utilisation.")
    }



}