import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";

const testimonials = [
  {
    name: "Tomandl, Tobias",
    position: "Solution Architect @ Nokia",
    text: "I never have seen such a good deployment documentation. Typically something is deployed and it is reported back: done. With such a proper a good documentation I even have the chance to reverse engineer some details (where I had no visibility before) and put them back into design documentation. Many many thanks, very well done!",
    avatar: memojiAvatar1,
  },
  {
    name: "Duvvuri, Chandra",
    position: "CPM @ Nokia",
    text: "@Panigrahi, Debasish, You joined in the tail end of the project but with your hard work and perseverance you made a difference. I am actually impressed with the work you did for us and your can do attitude. Good luck. Great job getting all the open issues resolved and especially the dedication I saw in last few weeks, really impressive!",
    avatar: memojiAvatar5,
  },
  {
    name: "Rajaram, Aravind",
    position: "CPM @ Nokia",
    text: "Thanks a lot for these documents that you have meticulously put together with such in-depth detail. I will post them on the Teams site. I am sure anyone who takes a look a them will be able to find answers to all their questions on IMPACT installation.",
    avatar: memojiAvatar3,
  },
];

export const TestimonialsSection = () => {
  return <div className="py-16 lg:py-24">
    <div>
      <div className="container">
        <SectionHeader eyebrow="Happy Clients" title="Testimonials" description="What my clients say about me:" />
          {/* <div className="mt-16 lg:mt-24 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"> */}
          <div className="mt-16 lg:mt-24 flex">
            <div className="flex flex-col gap-8 lg:flex-row">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.name} className="max-w-xs md:max-w-m md:p-8">
              
                  <div className="flex gap-4 items-center">
                    <div className="size-14 bg-gray-700 inline-flex flex-shrink-0 rounded-full items-center justify-center>">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="max-h-full" />
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-white/40">{testimonial.position}</div>
                    </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base">{testimonial.text}</p>
                </Card>
              ))}
            </div>
          </div>
      </div>
    </div>
  </div>;
};
