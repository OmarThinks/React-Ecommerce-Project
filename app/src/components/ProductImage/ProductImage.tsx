import Image from "next/image";
import { memo } from "react";
import Image0 from "@images/shirt-1.jpeg";
import Image1 from "@images/shirt-2.jpg";
import Image2 from "@images/shirt-3.jpg";
import Image3 from "@images/shirt-4.jpg";

const imageLinks2 = [Image0, Image1, Image2, Image3];

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
