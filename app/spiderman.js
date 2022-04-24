// Creando una clase spiderman con datos para luego probarlos


class spiderman {
    constructor(name, age, actor, movies, studio) {
        this.name = name,
        this.age = age,
        this.actor = actor,
        this.movies = [],
        this.studio = studio
    }
    getInfo() {
        return `Hey, I'm ${this.actor} from ${this.studio} studios.`;
    }
}

module.exports = spiderman;