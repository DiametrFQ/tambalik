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
    theEndText: `
        Уважаемые граждане,\n
        Мы выбираем путь монархии – символа стабильности и объединения. Ставьте вперёд интересы нации. Вместе к новой эре процветания!\n
        Спасибо за ваш выбор и доверие!
    `,
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
    theEndText: `
      Дорогие друзья,\n
      Победа наша! Мы выбрали свободный путь либерализма. Благодарим за вашу поддержку. Вместе к новому успешному этапу!\n
      Победа в наших руках!    
    `,
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
    theEndText: `
      Граждане,\n
      Победа демократии наша! Защищаем права, слушаем каждый голос. Благодарим за ваш выбор и поддержку. Вместе к светлому будущему!\n
      Демократия – наше общее достижение!    
    `,
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
    theEndText: `
      Уважаемые соотечественники,\n
      Победа национализма — наше общее достижение! Спасибо за вашу решимость и поддержку. Вместе мы направляемся к сильному будущему, где гордость за нашу нацию является ее крепким основанием!\n
      Спасибо за веру в нас. Вперед, к новым победам и процветанию нашей великой страны!   
    `,
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
    theEndText: `
      Уважаемые соотечественники,\n
      Победа национализма — наше общее достижение! Спасибо за вашу решимость и поддержку. Вместе мы направляемся к сильному будущему, где гордость за нашу нацию является ее крепким основанием!\n
      Спасибо за веру в нас. Вперед, к новым победам и процветанию нашей великой страны!   
    `,
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
    theEndText: `
      Граждане,\n
      Победа партии зеленых — наше общее достижение! Спасибо за поддержку в заботе о нашей планете. Давайте вместе создадим зеленое будущее!\n
      Спасибо за ваш вклад в заботу о природе. Вместе мы делаем мир чище и зеленее!
    `,
  },
];

var Party = new Partys(dataPartys);
export default Party;
