import Icon from "../icons";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="mt-[57px] pb-[82px] px-5">
      <div className="max-w-[978px] mx-auto">
        <div className="relative">
          <div className="max-w-[516px] relative z-[1]">
            <h2 className="font-urbanist font-bold text-[35px] leading-[42px] text-white">
              Want to Turn Social Media Into a Profitable Career?
            </h2>
            <h1 className="font-urbanist font-bold text-[35px] leading-[42px] text-[#00E7F9] text-shadow-[0_4px_4px_#FC004E]">
              Discover your way to success with Fametonic:
            </h1>
            <ul className="mt-4">
              <li className="font-figtree font-semibold text-[16px] leading-[22px] text-white mt-[13px]">
                ✨ Start growing your influence right away—no waiting required!
              </li>
              <li className="font-figtree font-semibold text-[16px] leading-[22px] text-white mt-[13px]">
                ✨ Create viral TikToks and Reels step by step with
                easy-to-follow lessons
              </li>
              <li className="font-figtree font-semibold text-[16px] leading-[22px] text-white mt-[13px]">
                ✨ Use a Personal AI Worker to boost your content
              </li>
              <li className="font-figtree font-semibold text-[16px] leading-[22px] text-white mt-[13px]">
                ✨ Learn from expert-led courses designed for aspiring
                influencers
              </li>
            </ul>
            <div className="table mt-[30px] text-center">
              <button className="flex items-center justify-center gap-[10px] bg-[#FC004E] shadow-[2px_2px_10px_0px_rgba(0,231,249,1)] font-figtree font-bold text-[20px] text-white uppercase rounded-[10px] cursor-pointer w-[313px] h-10">
                GET STARTED
                <Icon name="arrow" />
              </button>
              <small className="block font-figtree text-[12px] leading-[16px] text-white pt-[10px]">
                1-minute quiz for personalized Insights
              </small>
            </div>
            <p className="font-figtree font-medium text-[12px] leading-[14px] text-[#ABABAB] mt-[30px]">
              By clicking "Get Started", you agree with Terms and Conditions,
              Privacy Policy, Subscription Terms
            </p>
            <small className="font-figtree font-medium text-[10px] leading-[100%] text-[#ABABAB] pt-3">Fametonic 2025 ©All Rights Reserved.</small>
          </div>

          <div className="absolute -right-[110px] -top-[86px]">
            <Image
              src={"/app_view.webp"}
              alt="Fame Tonic App Preview"
              height={679}
              width={666}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
