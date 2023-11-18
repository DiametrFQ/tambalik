import "./style.scss"
function EventButton() {

  const visabilitySolution = () => {

    setTimeout(()=>{
      const solution: HTMLDivElement = document.querySelector(".solution")!
      const startMenuHeight = "445px"

      solution.style.transform = "scale(1)";
      solution.style.height = startMenuHeight;

    },0)

  }

  return (
    <div className='eventButton' onClick={visabilitySolution}>
      Уровень &#9660;
    </div>
  );
}

export default EventButton;