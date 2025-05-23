export const Newsletter = () => {
  return (
    <div className="container pb-[35px]">
    <div className="w-full relative rounded-[91px] flex flex-col items-center justify-center py-[67px] px-[351px] box-border bg-[url('/images/newsletter-bg.png')] bg-cover bg-no-repeat bg-[top] text-center text-[55px] text-black font-poppins">
          <h2 className="relative font-bold secondary-font leading-[105px] font-cinzel">Subscribe Our Newsletter</h2>
          <div className="w-[863px] relative text-[25px] inline-block h-[82px] shrink-0">Be the first to see new collections, get exclusive behind-the-scenes content, and receive special offers just for art lovers.</div>
          <div className="w-[831px] relative h-[105px] text-left text-base text-gray">
              <div className="absolute top-[0px] left-[0px] w-[831px] h-[105px]">
                  <div className="absolute top-[16px] left-[0px] bg-white border-dimgray border-solid border-[1px] box-border w-[831px] h-[69px]" />
                  <div className="absolute top-[0px] left-[32px] leading-[105px]">Email</div>
              </div>
              <div className="absolute top-[0px] left-[654px] w-[177px] h-[105px] text-white">
                  <div className="absolute top-[16px] left-[0px] bg-black w-[177px] h-[69px]" />
                  <div className="absolute top-[0px] left-[49px] leading-[105px]">Subscribe</div>
              </div>
          </div>
      </div>
    </div>
      );
};

