import "./style.scss"
import LinkTo from "./LinkTo";

function Menu() {
  return (
    <div className="menu">
      <LinkTo path="/policy-situation" content="Политическая ситуация" />
      <LinkTo path="/economy" content="Экономика" />
      {/* <LinkTo path="/foreign-policy" content="Внешняя политика" /> */}
      <LinkTo path="/tasks" content="Задачи" />
      <LinkTo path="/trends" content="Тенденции" />
    </div>
  );
}

export default Menu;