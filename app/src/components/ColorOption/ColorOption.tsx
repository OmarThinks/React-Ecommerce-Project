import React, { memo } from "react";
import Image from "next/image";

const ColorOption = memo(
  ({ imgLink, isChosen }: { imgLink: string; isChosen: boolean }) => {
    const borderColor = isChosen ? "purple" : "lightgray";

    return (
      <div
        className="w-[70px] h-[70px] rounded-full overflow-hidden border-[1px]"
        style={{ backgroundColor: "lightgray", borderColor }}
      >
        <Image src={imgLink} width={70} height={70} alt="option image" />
      </div>
    );
  }
);

ColorOption.displayName = "ColorOption";

export default ColorOption;
