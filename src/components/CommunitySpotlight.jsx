import React from "react";
import SunImage from '../assets/sun-icon.svg'
import comminuteImage from '../assets/community-theme-logo.png'

const SpotlightCard = () => {
  return (
    <>
    <div className="bg-white p-3 md:p-10 rounded-3xl col-span-2 shadow-xl">

    <div className="col-span-2 bg-community-card border border-[#82BC34]  p-[1px] rounded-b-xl rounded-tr-xl relative overflow-hidden" >
      <div className=" flex  rounded-b-xl rounded-tr-xl  " 
      >
        <div>
          <div className="bg-white absolute -top-1 -left-1  border-t-white border-b-[1px] border-r-[1px] border-[#82BC34] p-5 tag flex flex-col gap-5">
            <div className="flex items-center gap-3">

              <img src={SunImage} alt="" />
              <h2 className="bg-green-gradient bg-clip-text text-transparent">Community Spotlight</h2>

            </div>
            <div className="text-[#0E2C46] text-3xl font-semibold">Orange telecom</div>
          <div className="curv_1"></div>
          <div className="curv_2"></div>
          </div>
          <div className="h-full w-[350px] p-3 pt-[120px] ">
            <img className="h-[320px] w-[320px]" src={comminuteImage} alt="" />
          </div>
        </div>
        <div className="p-10 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia asperiores iusto odit atque, soluta iure numquam exercitationem doloremque delectus ratione mollitia ex temporibus repellat rem optio aspernatur quis voluptatibus nisi aliquid est esse veritatis vitae itaque recusandae! Voluptate deserunt fugit rerum aliquid sit eum? Sunt temporibus soluta aut sapiente, expedita reprehenderit quod earum nisi ipsum dolores laboriosam architecto ut eligendi neque? Cumque officiis fuga reiciendis doloremque natus quam quo labore, eaque voluptatem distinctio maxime aliquam autem, ratione non quibusdam assumenda itaque tempora nobis</div>
      </div>
    </div>

      {/* <div className=" z-0">
        <div className="flex flex-col md:flex-row border  rounded-3xl z-10">
            <div>
                <div className="bg-white   h-[120px]  md:min-w-[350px] border-b-[1px] border-[#82BC34] border-r-[1px]">
                  <div className="flex items-center gap-3 p-5 ">
                    <img src={SunImage} alt="" />
                    <h2 className="bg-green-gradient bg-clip-text text-transparent">Community Spotlight</h2>
                  </div>
                  <div className="text-[#0E2C46] text-3xl font-semibold">Orange telecom</div>
            
                </div>
                <div className="p-2 md:p-10 bg-community-card ">
                  <img  src={comminuteImage} alt="" />
                </div>
            </div>
            <div className="p-5 bg-community-card overflow-hidden">

                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro hic dolorem suscipit, nemo rerum est vitae eligendi mollitia illo totam earum? Nihil quam excepturi sed aliquam non reprehenderit doloribus blanditiis veniam accusantium quisquam nesciunt consectetur facilis illum natus tempora quis similique, nam in harum omnis ab temporibus iusto recusandae ipsa!</div>
            </div>
          </div>
      </div> */}
      </div>
    </>
  );
};

export default SpotlightCard;
