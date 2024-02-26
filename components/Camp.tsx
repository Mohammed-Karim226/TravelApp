import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

type campProps = {
  bgImage:string;
  title:string;
  subTitle:string;
  peopleJoined:string;

}

const CampSite = ({bgImage, title, subTitle, peopleJoined}: campProps)=>{
  return(
    <div className={`w-full h-full min-w-[1100px] ${bgImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl ` }>

      <div className="flex flex-col h-full items-start justify-between p-6 lg:px-20 lg:py-10" >
          {/* left */}
        <div className="flexCenter gap-4" >
          <div className="rounded-full bg-green-50 p-4" >
            <Image
              src='/folded-map.svg'
              alt="map"
              width={28}
              height={28}
            />
          </div>
          <div className="flex flex-col gap-1" >
            <h4 className="bold-18 text-white" >{title}</h4>
            <p className="regular-16 text-white" >{subTitle}</p>
          </div>
        </div>
        {/* end */}
          {/* right */}
        <div className="flexCenter gap-6" >
            <span className="flex -space-x-4 overflow-hidden" >
              {
                PEOPLE_URL.map((url)=>(
                  <Image
                  className="inline-block h-10 w-10 rounded-full"
                    src={url}
                    key={url}
                    alt="people"
                    width={52}
                    height={52}
                  />
                ))
              }
            </span>
            <p className="bold-16 text-white" >{peopleJoined}</p>
        </div>
          {/* end */}
      </div>

    </div>
  )
}

const Camp = () => {
  return (
    <section className='2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20' >
      <div className='hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]' >
          <CampSite
            bgImage='bg-bg-img-1'
            title='Putuk Truno Camp'
            subTitle='Truno Truno'
            peopleJoined='50+ Joined'
          />
          <CampSite
           bgImage='bg-bg-img-2'
           title='Mountain View camp'
           subTitle='Somewhere in the wilderness'
           peopleJoined='50+ Joined'
          />
      </div>
      <div className="flexEnd -mt-4 px-6 lg:-mt-60 lg:mr-10" >
        <div className="bg-green-50 p-8 relative w-full overflow-hidden lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 rounded-3xl" >
            <h2 className="regular-24 md:regular-32 2xl:regular-64 text-white capitalize" >
              <strong>Feeling Lost</strong> And Not Knowing The Way?
            </h2>
            <p className="regular-14 xl:regular-16 mt-5 text-white" > Starting from the anxiety of the climbers when visiting a new climbing location, the possibility of getting lost is very large. That's why we are here for those of you who want to start an adventure</p>
            <Image
            src='/quote.svg'
            alt="quote"
            width={186}
            height={219}
            className="camp-quote"
            />
        </div>
      </div>
    </section>
  )
}

export default Camp