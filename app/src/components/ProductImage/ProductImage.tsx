import Image from "next/image";
import { memo } from "react";
import image0 from "@images/shirt1.jpeg";
import image1 from "@images/shirt2.jpg";
import image2 from "@images/shirt3.jpg";
import image3 from "@images/shirt4.jpg";

const imageLinks2 = [image0, image1, image2, image3];

const ProductImage = memo(
  ({
    size,
    imageNumnber,
    borderRadius = 0,
  }: {
    size: number;
    imageNumnber: 0 | 1 | 2 | 3;
    borderRadius?: number;
  }) => {
    return (
      <Image
        //width={size}
        //height={size}
        src={imageLinks2[imageNumnber]}
        alt="shirt-1"
        style={{ borderRadius, width: size, height: size }}
        className="overflow-hidden"
      />
    );
  }
);

ProductImage.displayName = "ProductImage";

export default ProductImage;
