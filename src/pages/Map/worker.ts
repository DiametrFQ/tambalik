// Map/worker.ts

/* eslint-disable no-restricted-globals */

import { getCoord } from "./service";
// import { workerData } from "worker_threads";

export const writePersons = (
  partys: [[number, number, number], number][],
  ctx: CanvasRenderingContext2D,
  can: React.RefObject<HTMLCanvasElement>
) => {
  while (!partys.every((p) => p[1] === 0)) {
    const random = Math.floor(Math.random() * partys.length);
    const party = partys[random];

    if (party[1] === 0) {
      partys = partys.filter((p) => p[1] > 0);
      continue;
    }
    party[1]--;

    const coords = getCoord(104);
    const size: [number, number] = [40, 25];

    const img = new Image();
    img.src = "chels/chel-red.png";
    img.onload = () => {
      ctx.drawImage(img, ...coords, ...size);
      const imageData = ctx.getImageData(
        ...coords,
        can.current!.width,
        can.current!.height
      );
      const data = imageData.data;
      // Проходим по каждому пикселю и изменяем его цвет

      for (let j = 0; j < data.length; j += 4) {
        data[j] = party[0][0]; //R
        data[j + 1] = party[0][1]; //G
        data[j + 2] = party[0][2]; //B
      }
      ctx.putImageData(imageData, ...coords);
    };
  }
};

// console.log(workerData);
