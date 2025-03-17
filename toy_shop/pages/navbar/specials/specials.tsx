import Image from "next/image";
export default function Specials() {
  return (
    <div>
      <p>Out special's</p>
      <p>Get out best-selling products</p>
      <ul>
        <li>
          <Image src="/goat.jpg" alt="goat" width={200} height={200} />
        </li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}
