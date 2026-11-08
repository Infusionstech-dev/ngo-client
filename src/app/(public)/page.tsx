import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { Purpose } from "@/components/home/Purpose";
import { WhyNow } from "@/components/home/WhyNow";
import { Mission } from "@/components/home/Mission";
import { Gallery } from "@/components/home/Gallery";
import { Publications } from "@/components/home/Publications";
import { Membership } from "@/components/home/Membership";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Purpose />
      <WhyNow />
      <Mission />
      <Gallery />
      <Publications />
      <Membership />
    </>
  );
}
