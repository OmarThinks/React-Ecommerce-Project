import Image from "next/image";
import { memo } from "react";

const imageLinks = [
  "/shirt-1.jpeg",
  "/shirt-2.jpg",
  "/shirt-3.jpg",
  "/shirt-4.jpg",
];

const ProductImage = memo(
  ({ size, imageNumnber }: { size: number; imageNumnber: 0 | 1 | 2 | 3 }) => {
    return (
      <Image
        width={size}
        height={size}
        src={imageLinks[imageNumnber]}
        alt="shirt-1"
      />
    );
  }
);

ProductImage.displayName = "ProductImage";

export default ProductImage;
