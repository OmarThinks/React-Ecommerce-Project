import Image from "next/image";
import { memo } from "react";

const ProductImage = memo(({}: {}) => {
  return <Image width={500} height={500} src="/shirt-1.jpeg" alt="shirt-1" />;
});

ProductImage.displayName = "ProductImage";

export default ProductImage;
