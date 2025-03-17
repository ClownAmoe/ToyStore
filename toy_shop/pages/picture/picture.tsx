export default function Picture() {
  return (
    <div className="bg-[url('/teddy.jpg')] h-lvh w-full bg-cover items-center flex justify-center">
      <div className=" flex justify-center items-center flex-col bg-sky-200 p-16 rounded-lg opacity-50 hover:opacity-100 transition-transform">
        <p className="text-5xl p-4">Get a new friend!</p>
        <a
          href="#shop"
          className="bg-amber-300 text-5xl rounded-2xl p-8 hover:scale-125 hover:bg-amber-200 transition-transform mt-2"
        >
          Shop now!
        </a>
      </div>
    </div>
  );
}
