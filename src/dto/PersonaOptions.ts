export interface PersonaOptions {
    assistant?: Partial<Persona>;
    user?: Partial<Persona>;
  }


  export interface Persona {
    avatar: string | React.ElementType;
    name: string;
    tagline?: string;
  }
  