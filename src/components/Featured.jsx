import Image from "next/image";

export const Featured = () => {
  	return (
    		<div className="featured-section secondary-font w-full relative h-[1281px] flex flex-col items-center justify-center py-[113px] px-0 box-border gap-[63px]  bg-cover bg-no-repeat bg-[top] text-left text-[55px] text-black font-cinzel">
      			<b className="w-[814px] relative leading-[107px] inline-block h-[107px] shrink-0">Featured Artist pROFILES</b>
      			<div className="w-[1640px]   h-[895px] flex flex-col relative text-3xl text-white">
        				<div className="absolute top-[0px] left-[0px] w-[812px] h-[591px] z-[0]">
          					<Image className="absolute top-[0px] left-[0px] rounded-[20px] w-[812px] h-[591px] object-cover" fill alt="" src="/images/featured-img-01.png" />
          					<b className="absolute top-[482px] left-[64px] leading-[107px] inline-block w-[325px] h-[42px]">{`Devin Pughsley `}</b>
        				</div>
        				<div className="absolute top-[604px] left-[0px] w-[812px] h-[287px] z-[1]">
          					<Image className="absolute top-[0px] left-[0px] rounded-[20px] w-[812px] h-[287px] object-cover" fill alt="" src="/images/featured-img-02.png" />
          					<b className="absolute top-[172px] left-[64px] leading-[107px] inline-block w-[325px] h-[42px]">Robbie Lasky</b>
        				</div>
        				<div className="absolute top-[302px] left-[820px] w-[812px] h-[286px] z-[2]">
          					<Image className="absolute top-[0px] left-[0px] rounded-[20px] w-[812px] h-[286px] object-cover" fill alt="" src="/images/featured-img-04.png" />
          					<b className="absolute top-[177px] left-[44px] leading-[107px] inline-block w-[325px] h-[42px]">Jim Tidwell</b>
        				</div>
        				<div className="absolute top-[0px] left-[820px] w-[812px] h-[286px] z-[3]">
          					<Image className="absolute top-[0px] left-[0px] rounded-[20px] w-[812px] h-[286px] object-cover" fill alt="" src="/images/featured-img-03.png" />
          					<b className="absolute top-[179px] left-[44px] leading-[107px] inline-block w-[325px] h-[42px]">Luke Joshu</b>
        				</div>
        				<div className="absolute top-[604px] left-[820px] w-[802px] h-[287px] z-[4]">
          					<div className="absolute top-[0px] left-[0px] w-[390px] h-[287px]">
            						<Image className="absolute top-[0px] left-[0px] rounded-[20px] w-[390px] h-[287px] object-cover" fill alt="" src="/images/featured-img-05.png" />
            						<b className="absolute top-[172px] left-[40px] leading-[107px] inline-block w-[325px] h-[42px]">Emily Brown</b>
          					</div>
          					<div className="absolute top-[0px] left-[404px] w-[398px] h-[287px]">
            						<Image className="absolute top-[0px] left-[0px] rounded-[20px] w-[398px] h-[287px] object-cover" fill alt="" src="/images/featured-img-06.png" />
            						<b className="absolute top-[172px] left-[44px] leading-[107px] inline-block w-[325px] h-[42px]">Luke Joshu</b>
          					</div>
        				</div>
      			</div>
    		</div>);
};