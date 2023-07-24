export type Car = {
  name: string;
  color: string;
}

export type CarWithId = Car & {
  id: number;
}

export type CarEngine = {
  velocity: number;
  distance: number;
}