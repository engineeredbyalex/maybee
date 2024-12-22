import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen min-h-screen lg:h-screen gap-10  flex flex-col lg:flex-row">
      <div className="lg:w-1/2 w-full h-[20rem] lg:h-full background_image"></div>
      <div className="lg:w-1/2 w-full h-full px-6 lg:pr-6 lg:px-0 gap-6 flex flex-col justify-center ">
        <h2 className="text-[3.75rem] leading-tight font-gambetta font-bold">
          Ne pare rău !
        </h2>
        <h4 className="text-[2rem] leading-tight font-montserrat">
          Site-ul nostru este momentan în curs de actualizare.
        </h4>
        <h6 className="text-[1.5rem] leading-tight font-montserrat">
          Lucrăm pentru a vă oferi o experiență mai bună! Ne cerem scuze pentru
          inconveniente, dar site-ul nostru este momentan în curs de
          actualizare. Revenim în curând cu o versiune îmbunătățită.
        </h6>
        <h6 className="text-[1.5rem] leading-tight font-montserrat">
          Vă mulțumim pentru răbdare!
        </h6>
        <h4 className="text-[1.5rem] leading-tight font-bold font-montserrat">
          Dacă aveți nevoie de informații urgente, ne puteți contacta la:
        </h4>
        <div className="gap-2 lg:gap-5 flex flex-col lg:flex-row">
          <Link
            className="text-[1.15rem] leading-tight  font-montserrat"
            href={"/"}
          >
            mixedarts.events@gmail.com
          </Link>
          <Link
            className="text-[1.15rem] leading-tight  font-montserrat"
            href={"/"}
          >
            0722 156 355
          </Link>
          <Link
            className="text-[1.15rem] leading-tight  font-montserrat"
            href={"https://www.instagram.com/maybee.candle.shop/"}
          >
            Instagram
          </Link>
          <Link
            className="text-[1.15rem] leading-tight  font-montserrat"
            href={"https://www.facebook.com/maybee.for.your.home"}
          >
            Facebook
          </Link>
        </div>
      </div>
    </div>
  );
}
