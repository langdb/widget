export interface PersonaOptions {
    assistant?: Persona;
    user?: Persona;
}
export interface Persona {
    url: string;
    name: string;
    tagline?: string;
}
