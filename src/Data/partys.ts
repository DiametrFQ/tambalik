import Partys from "../Services/Classes/CPartys";
import { TParty } from "../Services/types/TParty";

var dataPartys: TParty[] = [
  {
    color: "bg-[#6201FD]",
    politica: "monarchist",
    leader: "img/leaders/foto_mon.png",
    firstName: "Pablo",
    lastName: "Farlo",
    work: "hunter",
    pop: 800,
    par: 800,
  },
  {
    color: "bg-[#BE9719]",
    politica: "liberal",
    leader: "img/leaders/foto_lib.png",
    firstName: "ara",
    lastName: "awred",
    work: "hunter",
    pop: 230,
    par: 90,
  },
  {
    color: "bg-[#23ABFA]",
    politica: "democratic",
    leader: "img/leaders/foto_dem.png",
    firstName: "ara",
    lastName: "awred",
    work: "hunter",
    pop: 169,
    par: 150,
  },
  {
    color: "bg-[#0004FF]",
    politica: "nationalist",
    leader: "img/leaders/foto_nat.png",
    firstName: "ara",
    lastName: "awred",
    work: "hunter",
    pop: 1000,
    par: 410,
  },
  {
    color: "bg-[#24D613]",
    politica: "green",
    leader: "img/leaders/foto_grn.png",
    firstName: "ara",
    lastName: "awred",
    work: "hunter",
    pop: 200,
    par: 10,
  },
  {
    color: "bg-[#DD1111]",
    politica: "socialist",
    leader: "img/leaders/foto_soc.png",
    firstName: "ara",
    lastName: "awred",
    work: "hunter",
    pop: 400,
    par: 5,
  },
];

var Party = new Partys(dataPartys);
export default Party;
