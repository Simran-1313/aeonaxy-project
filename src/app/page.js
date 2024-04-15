import Image from "next/image";
import Navbar from "./components/Navbar";
import HomePageContainer from "./containers/HomePageContainer/page";
import Menupage from "./containers/MenupageContainer/page";
import WhyChooseYummyConatiner from "./containers/WhyChooseYummyContainer/page";
import ContactPageContainer from "./containers/GoogleMapConatainer/page";


export default function Home() {
  return (
    <main className=" min-h-screen  flex-col items-center justify-between ">
<Navbar/>
<HomePageContainer/>
<WhyChooseYummyConatiner/>
<Menupage/>
<ContactPageContainer/>

    </main>
  );
}
