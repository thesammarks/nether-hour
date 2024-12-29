import SocialIcons from "./components/SocialIcons";
import NhLogo from "./components/NhLogo";
import VideoBkgd from "./components/VideoBkgd";
import ScrollIcon from "./components/ScrollIcon";
import Videos from "./components/Videos";
import ListenNow from "./components/ListenNow/ListenNow";

export default function Home() {

  return (
    <main className="min-h-screen bg-black text-nh-white flex justify-center items-center">
      <VideoBkgd />
      <SocialIcons />
      <NhLogo />
      <ScrollIcon />

      <div className="relative w-full bg-black top-[120vh] flex flex-col items-center gap-20 z-20 pb-16">
        {/* Listen Now */}
        <ListenNow />

        {/* The Band */}
        <div className="flex flex-col items-center gap-5">
          <div className="text-2xl font-bold">The Band</div>
          <div className="grid grid-cols-2 gap-x-4">
            <a className="justify-self-end font-semibold" href="https://www.instagram.com/_bercy/" target="_blank" rel="noopener noreferrer">Bercy</a>
            <a href="https://www.instagram.com/_bercy/" target="_blank" rel="noopener noreferrer">@_bercy</a>
            <a className="justify-self-end font-semibold" href="https://www.instagram.com/loverboybishop/" target="_blank" rel="noopener noreferrer">Bishop</a>
            <a href="https://www.instagram.com/loverboybishop/" target="_blank" rel="noopener noreferrer">@loverboybishop</a>
            <a className="justify-self-end font-semibold" href="https://www.instagram.com/bobflaco13/" target="_blank" rel="noopener noreferrer">Bobby Flaco</a>
            <a href="https://www.instagram.com/bobflaco13/" target="_blank" rel="noopener noreferrer">@bobflaco13</a>
          </div>
        </div>

        {/* Booking */}
        <div className="flex flex-col text-center items-center gap-5 max-w-[80%]">
          <div className="text-2xl font-bold">Booking</div>
          <div className="max-w-[300px]">Email <a className="font-bold" href="mailto:netherhour@gmail.com">netherhour@gmail.com</a> for booking and business inquires.</div>
        </div>

        <div>
          <Videos />
        </div>

        <footer className="flex text-xs">
            © 2024 Nether Family Records | Website by&nbsp;<b><a href="https://justcallmesam.com/" target="_blank" rel="noopener noreferrer">Sam</a></b>
        </footer>
      </div>
    </main>
  );
}
