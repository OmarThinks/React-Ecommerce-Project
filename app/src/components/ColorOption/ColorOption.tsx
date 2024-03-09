import React, { memo } from "react";
import Image from "next/image";
import colors from "@colors";

const ColorOption = memo(
  ({ imgLink, isChosen }: { imgLink: string; isChosen: boolean }) => {
    const borderColor = isChosen ? colors.primaryColor : colors.lightGray;

    return (
      <div
        className="w-[70px] h-[70px] rounded-full overflow-hidden border-[1px]"
        style={{ backgroundColor: colors.lightGray, borderColor }}
      >
        <Image src={imgLink} width={70} height={70} alt="option image" />
      </div>
    );
  }
);

ColorOption.displayName = "ColorOption";

export default ColorOption;
