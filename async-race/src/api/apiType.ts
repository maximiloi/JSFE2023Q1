export type Car = {
  name: string;
  color: string;
}

export type CarWithId = Car & {
  id: number;
}

export type CarWinner = {
  id: number;
  wins: number;
  time: number;
}

export type CarWinnerWithColorAndName = CarWinner & {
  color: string;
  name: string;
}

export type CarEngine = {
  velocity: number;
  distance: number;
}