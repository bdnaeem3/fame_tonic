import Icon from "../icons";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="mt-[57px] pb-10 md:pb-[82px] px-5">
      <div className="max-w-[978px] mx-auto">
        <div className="flex flex-col-reverse relative">
          <div className="max-w-[516px] relative z-[1]">
            <h2 className="font-urbanist font-bold text-[25px] md:text-[35px] leading-[30px] md:leading-[42px] text-white text-center md:text-left">
              Want to Turn Social Media Into a Profitable Career?
            </h2>
            <h1 className="font-urbanist font-bold text-[25px] md:text-[35px] leading-[30px] md:leading-[42px] text-[#00E7F9] text-shadow-[0_4px_4px_#FC004E] text-center md:text-left">
              Discover your way to success with Fametonic:
            </h1>
            <ul className="mt-[22px] md:mt-4">
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
            <div className="flex flex-col-reverse md:flex-col">
              <div className="max-w-full self-start mt-[32px] md:mt-[30px] text-center">
                <button className="flex items-center justify-center gap-[10px] bg-[#FC004E] shadow-[2px_2px_10px_0px_rgba(0,231,249,1)] font-figtree font-bold text-[20px] text-white uppercase rounded-[10px] cursor-pointer w-[313px] max-w-full h-10">
                  GET STARTED
                  <Icon name="arrow" />
                </button>
                <small className="block font-figtree text-[12px] leading-[16px] text-white pt-[10px]">
                  1-minute quiz for personalized Insights
                </small>
              </div>
              <div className="text-center md:text-left">
                <p className="font-figtree font-medium text-[12px] leading-[14px] text-[#ABABAB] mt-[22px] md:mt-[30px]">
                  By clicking "Get Started", you agree with Terms and
                  Conditions, Privacy Policy, Subscription Terms
                </p>
                <small className="font-figtree font-medium text-[10px] leading-[14px] text-[#ABABAB] pt-[19px] md:pt-3">
                  Fametonic 2025 ©All Rights Reserved.
                </small>
              </div>
            </div>
          </div>

          <div className="relative md:absolute md:right-0 lg:-right-5 xl:-right-[110px] md:-top-[86px]">
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
