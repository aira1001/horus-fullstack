
"use client";

import { Button, Card } from "flowbite-react";
import Image from "next/image";

type Props = {
  nama: string;
  category: string;
  img_url?: string;
  className?: string;
}
export function CardComponent(props: Props) {
  return (
    <Card
      className={`${props.className}`}
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      renderImage={() => <Image width={500} height={500} src="/images/card-img.jpg" alt="image 1" />}
    >
      <div className="m-5 flex gap-2 flex-col">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {props.nama}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {props.category}
        </p>
        <Button className="bg-purple-700 hover:bg-purple-800">Claim</Button>
      </div>


    </Card>
  );
}
