import React from "react";
import SunImage from '../assets/sun-icon.svg'
import comminuteImage from '../assets/community-theme-logo.png'

const SpotlightCard = () => {
  return (
    <>
    <div className="bg-white p-10 rounded-3xl col-span-2 shadow-xl">

    <div className="col-span-2 bg-community-card border border-red-500  p-[1px] rounded-b-xl rounded-tr-xl relative overflow-hidden" >
      <div className=" flex  rounded-b-xl rounded-tr-xl  " 
      >
        <div>
          <div className="bg-white absolute top-0 left-0 border-b-[1px] border-r-[1px] border-[#82BC34] p-5 tag flex flex-col gap-5">
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
    </div>
    </>
  );
};

export default SpotlightCard;
