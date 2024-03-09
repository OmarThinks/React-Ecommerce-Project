import Image from "next/image";
import { memo } from "react";
//import Image0 from ""

const imageLinks = [
  "/shirt-1.jpeg",
  "/shirt-2.jpg",
  "/shirt-3.jpg",
  "/shirt-4.jpg",
];

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
        width={size}
        height={size}
        src={imageLinks[imageNumnber]}
        alt="shirt-1"
        style={{ borderRadius }}
        className="overflow-hidden"
      />
    );
  }
);

ProductImage.displayName = "ProductImage";

export default ProductImage;
