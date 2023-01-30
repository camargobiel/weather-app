export interface Data {
  location: Location
  current: Current
}

interface Location {
  name: string;

}

interface Current {
  condition: Condition;
}

interface Condition {
  text: string
}