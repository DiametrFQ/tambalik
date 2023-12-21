import Partys from "../Services/Classes/CPartys";
import { TParty } from "../Services/types/TParty";

var dataPartys: TParty[] = [
  {
    color: "bg-[#6201FD]",
    politica: "monarchist",
    title: "Монархизм",
    leader: "img/leaders/foto_mon.svg",
    firstName: "Пабло",
    lastName: "Фарло",
    work: "hunter",
    pop: 800,
    par: 800,
  },
  {
    color: "bg-[#BE9719]",
    politica: "liberal",
    title: "Либерализм",
    leader: "img/leaders/foto_lib.svg",
    firstName: "Изабель",
    lastName: "Драконхарт",
    work: "hunter",
    pop: 230,
    par: 90,
  },
  {
    color: "bg-[#23ABFA]",
    politica: "democratic",
    title: "Демократия",
    leader: "img/leaders/foto_dem.svg",
    firstName: "Ксандар",
    lastName: "Фирас",
    work: "hunter",
    pop: 169,
    par: 150,
  },
  {
    color: "bg-[#0004FF]",
    politica: "nationalist",
    title: "Национализм",
    leader: "img/leaders/foto_nat.svg",
    firstName: "Елена",
    lastName: "Теневладычица",
    work: "hunter",
    pop: 1000,
    par: 410,
  },
  {
    color: "bg-[#24D613]",
    politica: "green",
    title: "Зелёные",
    leader: "img/leaders/foto_grn.svg",
    firstName: "Леонардо",
    lastName: "Изумрудный",
    work: "hunter",
    pop: 200,
    par: 10,
  },
  {
    color: "bg-[#DD1111]",
    politica: "socialist",
    title: "Социализм",
    leader: "img/leaders/foto_soc.svg",
    firstName: "Валентин",
    lastName: "Стальной",
    work: "hunter",
    pop: 400,
    par: 5,
  },
];

var Party = new Partys(dataPartys);
export default Party;
