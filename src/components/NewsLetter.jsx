import { Button } from "./ui/button";
import Input from "./ui/Input";

export const Newsletter = () => {
  return (
    <div className="container pb-[35px]">
      <div className="w-full relative rounded-[91px] flex flex-col items-center justify-center py-[67px] px-[351px] box-border bg-[url('/images/newsletter-bg.png')] bg-cover bg-no-repeat bg-[top] text-center text-[55px] text-black font-poppins">
        <h2 className="relative font-bold secondary-font leading-[105px] font-cinzel">Subscribe Our Newsletter</h2>
        <div className="w-[863px] relative mb-[10px] text-[25px] inline-block h-[82px] shrink-0">Be the first to see new collections, get exclusive behind-the-scenes content, and receive special offers just for art lovers.</div>
        <form action="" className="w-full">
          <div className="flex">
            <Input
              type="email"
              placeholder="Email"
              variant="subscribe"
              className="w-full"
            />
            <Button variant="primary" className="w-full  text-[#fff] bg-black max-w-[100px] text-[16px]  border border-black py-[29px] px-[69px] ">Subscribe</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

