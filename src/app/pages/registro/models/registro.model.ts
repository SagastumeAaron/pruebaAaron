export class RegistroModel {
    constructor(
        public name: string,
        public family_name: string,
        public email: string,
        public phone: number,
        public program: string,
        public comment: string

    ){}
}

export class ProgramaModel {
    constructor(
        public id: number,
        public name: string,
    ){}
}