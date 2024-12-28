import SocialIcons from "./components/SocialIcons";
import NhLogo from "./components/NhLogo";
import VideoBkgd from "./components/VideoBkgd";
import Image from "next/image"; 
import ScrollIcon from "./components/ScrollIcon";
import Videos from "./components/Videos";

export default function Home() {

  return (
    <main className="min-h-screen bg-black text-nh-white flex justify-center items-center">
      <VideoBkgd />
      <SocialIcons />
      <NhLogo />
      <ScrollIcon />

      <div className="relative w-full bg-black top-[120vh] flex flex-col items-center gap-20 z-20 pb-16">

        {/* Nether Hour /ˈneT͟Hər ou(ə)r/ */}
        <div className="flex flex-col items-center gap-5 max-w-lg text-center max-md:max-w-[80%]">
          <div className="flex gap-4 text-2xl font-bold">
            <div>Nether Hour</div>
            <div className="max-sm:hidden">/ˈneT͟Hər ou(ə)r/</div>
          </div>
          <div>
              <b>Nether Hour</b> is an Austin-based band that fuses Louisiana and Texas styles of funk, blues, soul, and rock & roll. Since their formation during SXSW 2018, the group has released serveral originals, including their 2023 and 2024 studio albums,{' '}
              <a className="font-bold italic" href="https://open.spotify.com/album/4FbVIUqviL1clsbL1Ql3wS" target="_blank" rel="noopener noreferrer">Rattlesnake Gumbo</a> and{' '}
              <a className="font-bold italic" href="https://open.spotify.com/album/0CJY4hih3MeO8rmCpbxxHt" target="_blank" rel="noopener noreferrer">SUNSHINE</a>.
          </div>
          <div>
            The group actively performs around the Live Music Capital of the World and has quickly become a staple in Austin's local music scene. Listen to their latest releases now on{' '}
            <a className="font-bold italic" href="https://open.spotify.com/artist/7xFkiQ9B6WA6932TniPRGr" target="_blank" rel="noopener noreferrer">Spotify</a> and{' '}
            <a className="font-bold italic" href="https://music.apple.com/us/artist/nether-hour/1544082556" target="_blank" rel="noopener noreferrer">Apple Music</a>.
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
                <div className="font-bold text-lg">Rattlesnake Gumbo</div>
                <div className="font-semibold italic">Latest Album</div>
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
                <div className="font-bold text-lg">Dancing on the Line</div>
                <div className="font-semibold italic">Latest Single</div>
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

        {/* Band Members */}
        <div className="flex flex-col items-center gap-5">
          <div className="text-2xl font-bold">Band Members</div>
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
