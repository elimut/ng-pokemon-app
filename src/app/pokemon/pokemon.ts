export class Pokemon {

    id: number;
    hp: number;
    cp: number;
    name: string;
    picture: string;
    types: string[];
    created: Date;

    constructor( //créa constructeur pour addPokemon afin d'avoir des éléments à proposer à l'user
        name: string = 'Enter a name',
        hp: number = 100,
        cp: number = 10,
        picture: string = 'https://assets.pokrmon.com/assets/cm2s/img/pokedex/detail/xxx.png',
        types: Array<string> = ['Normal'],
        created: Date = new Date()
    ) {
        this.name = name;
        this.hp = hp;
        this.cp = cp;
        this.picture = picture;
        this.types = types;
        this.created = created; 
    }
}