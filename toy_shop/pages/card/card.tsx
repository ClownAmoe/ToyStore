import { CardProps } from "./type";
import Image from "next/image";
import { CLASSNAME } from "./className";
export default function Card({ img, name, price }: CardProps) {
  return (
    <div className={CLASSNAME.MAIN_CARD}>
      <Image src={img} width={300} height={300} alt={name} />
      <p className={CLASSNAME.TEXT_CARD}>{name}</p>
      <span className="flex justify-between w-full items-center h-full border-t-2 pt-4">
        <a className={CLASSNAME.TEXT_CARD}>{price}</a>
        <a href="" className={CLASSNAME.CARD_BUTTON}>
          Buy now!
        </a>
      </span>
    </div>
  );
}
