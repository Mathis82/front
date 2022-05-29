export class Creneau{
  id:number;
  heureD:string
  heureF:string
  date:string;
  numOK:number;
  numKO:number;
  constructor()
  {
    this.id=0;
    this.heureD="";
    this.heureF="";
    this.date="";
    this.numOK=0;
    this.numKO=0;
  }
}
export class rdv {

  id : number;
  titre : string;
  description: string;
  listeCreneaux: Creneau [];


  constructor() {
    this.id =0;
    this.titre ="";
    this.description ="";
    this.listeCreneaux= [];
  }
  public addCreneau(creneau:Creneau){
    this.listeCreneaux[this.id]=creneau;
  }
}

  export class profilRdv {

    id : number;
    listeParticip : rdv[];
    nom: string;
    prenom: string;

    constructor() {
      this.id = 0;
      this.nom = "";
      this.prenom = "";
      this.listeParticip= [];

    }

    public addRdv(rdv:rdv){
      this.listeParticip[this.id]=rdv;
    }

  }

