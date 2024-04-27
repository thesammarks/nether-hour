import SocialIcons from "./components/SocialIcons";
import NhLogo from "./components/NhLogo";
import VideoBkgd from "./components/VideoBkgd";
import Image from "next/image"; 
import ScrollIcon from "./components/ScrollIcon";

export default function Home() {

  return (
    <main className="min-h-screen bg-black text-nh-white flex justify-center items-center">
      <VideoBkgd />
      <SocialIcons />
      <NhLogo />
      <ScrollIcon />

      <div className="relative w-full bg-black top-[120vh] flex flex-col items-center gap-20 z-20 pb-16">

        {/* Nether Hour /ˈneT͟Hər ou(ə)r/ */}
        <div className="flex flex-col items-center gap-5 max-w-lg max-sm:max-w-sm">
          <div className="text-2xl font-bold">Nether Hour&nbsp;&nbsp;/ˈneT͟Hər ou(ə)r/</div>
          <div className="text-center">
              <b>Nether Hour</b> is an Austin-based band that fuses Louisiana and Texas styles of southern funk, 
              blues, soul, and rock & roll. Since forming during SXSW 2018, the group has released 
              serveral originals, including their 2023 studio albumn, Rattlesnake Gumbo.
          </div>
        </div>
        
        {/* Listen Now */}
        <div className="flex flex-col items-center gap-5 max-w-5xl">
          <div className="text-2xl font-bold">Listen Now</div>
          <div className="flex max-sm:flex-col gap-5 items-center">
            <a 
              href="https://open.spotify.com/album/4FbVIUqviL1clsbL1Ql3wS/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col gap-2 items-center">
              <div className="flex flex-col items-center">
                <div className="font-semibold text-lg">Rattlesnake Gumbo</div>
                <div className="font-semibold">Latest Album</div>
              </div>
              <Image
                src="/images/rattlesnake_gumbo.jpg"
                width={250}
                height={250}
                alt="RattleSnake Gumbo"
              />
            </a>
            <a 
              href="https://open.spotify.com/track/1DbPDhNObD6ZZjKK7IZL7t/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col gap-2 items-center">
              <div className="flex flex-col items-center">
                <div className="font-semibold text-lg">Dancing on the Line</div>
                <div className="font-semibold">Latest Single</div>
              </div>
              <Image
                src="/images/dancing_on_the_line.jpg"
                width={250}
                height={250}
                alt="Dancing on the Line"
              />
            </a>
          </div>
        </div>

        {/* Upcoming Shows */}
        <div className="flex flex-col items-center gap-5 max-w-5xl text-center">
          <div className="text-2xl font-bold">Upcoming Shows</div>
          <div className="flex max-sm:flex-col gap-10">
            <a 
              href="https://inncahoots.com/public-bars/austin-garden-studio/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center">
              <div className="font-bold">Austin Garden & Studio</div> 
              <div>1209 E 6th St, Austin, TX 78702</div>
              <div>Saturdays (4PM-6PM)</div>
            </a>
            <a 
              href="https://wtficehouse.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center">
              <div className="font-bold">WTF Ice House</div>
              <div>701 W 6th St, Austin, TX 78701</div>
              <div>Sundays (5PM-8PM)</div>
            </a>
          </div>  
          <div>THESE SHOWS ARE FREE AND WEEKLY</div>
          <div>For the latest updates, check out <a className="font-bold" href="https://instagram.com/netherhour" target="_blank" rel="noopener noreferrer">@netherhour</a> on Instagram</div>
        </div>

        {/* Members */}
        <div className="flex flex-col items-center gap-5 max-w-5xl">
          <div className="text-2xl font-bold">Members</div>
          <div className="grid grid-cols-2 gap-x-4">
            <a className="justify-self-end font-semibold" href="https://www.instagram.com/bobflaco13/" target="_blank" rel="noopener noreferrer">Bobby Flaco</a>
            <a href="https://www.instagram.com/bobflaco13/" target="_blank" rel="noopener noreferrer">@bobflaco13</a>
            <a className="justify-self-end font-semibold" href="https://www.instagram.com/loverboybishop/" target="_blank" rel="noopener noreferrer">Bishop</a>
            <a href="https://www.instagram.com/loverboybishop/" target="_blank" rel="noopener noreferrer">@loverboybishop</a>
            <a className="justify-self-end font-semibold" href="https://www.instagram.com/_bercy/" target="_blank" rel="noopener noreferrer">Bercy</a>
            <a href="https://www.instagram.com/_bercy/" target="_blank" rel="noopener noreferrer">@_bercy</a>
          </div>
        </div>

        {/* Booking */}
        <div className="flex flex-col text-center items-center gap-5 max-w-sm">
          <div className="text-2xl font-bold">Booking</div>
          <div>Email <a className="font-bold" href="mailto:netherhour@gmail.com">netherhour@gmail.com</a> for booking and business inquires</div>
        </div>

        {/* <div className="max-w-5xl">
          <Videos />
        </div> */}

        <footer className="flex text-xs">
            © 2024 Nether Family Records | Website by&nbsp;<b><a href="https://github.com/samuelbmarks/" target="_blank" rel="noopener noreferrer">Sam</a></b>
        </footer>
      </div>
    </main>
  );
}
