import React, { memo } from "react";
import Image from "next/image";
import colors from "@/theme/colors.module.scss";
import { ProductImage } from "..";

const ColorOption = memo(
  ({ imgNumber, isChosen }: { imgNumber: number; isChosen: boolean }) => {
    const borderColor = isChosen ? colors.primaryColor : colors.lightGray;

    return (
      <div
        className="w-[70px] h-[70px] rounded-full overflow-hidden border-[1px]"
        style={{ backgroundColor: colors.lightGray, borderColor }}
      >
        <ProductImage imageNumnber={imgNumber as 0} size={70} />
      </div>
    );
  }
);

ColorOption.displayName = "ColorOption";

export default ColorOption;
