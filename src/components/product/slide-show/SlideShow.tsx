import {
  Card,
  CardContent,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components";
import Image from "next/image";

interface Props {
  images: string[];
  title: string;
  className?: string;
}

export const SlideShow = ({images, title, className}: Props) => {
  return (
    <Carousel className="w-full max-w-3xl">
      <CarouselContent>
        {images.map((image) => (
          <CarouselItem key={image}>
            <div className="p-1">
              <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <Image 
                      src={`/products/${image}`}
                      alt={title}
                      priority={true}
                      width={700}
                      height={500}
                    />
                  </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
