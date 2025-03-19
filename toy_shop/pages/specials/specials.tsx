import { specialsInfo } from "@/pages/specials/specialsInfo";
import Card from "../card/card";

export default function Specials() {
  return (
    <div className="flex justify-center flex-col w-full items-center p-8">
      <p className="text-3xl pb-4">Our specials</p>
      <p className="text-3xl pb-4">Get our best-selling products</p>
      <ul className="flex justify-around flex-row items-center w-full">
        {specialsInfo.map((e) => (
          <li key={e.name}>
            <Card img={e.img} name={e.name} price={e.price} />
          </li>
        ))}
      </ul>
    </div>
  );
}
