import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="mt-[35px] px-5">
      <div className="max-w-[1000px] mx-auto">
        <div className="flex justify-between">
          <Link href={"#"}>
            <Image src={"/logo.svg"} alt="Fame Tonic" height={74} width={173} />
          </Link>

          <div className="flex gap-10">
            <Link
              href={"#"}
              className="font-figtree font-semibold text-[18px] text-[#A9A9A9]"
            >
              About us
            </Link>
            <Link
              href={"#"}
              className="font-figtree font-semibold text-[18px] text-[#A9A9A9]"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
