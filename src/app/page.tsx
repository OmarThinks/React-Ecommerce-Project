import { AddToCart, Cart, QuantityCounter } from "@clientComponents";
import {
  Button,
  ColorOption,
  ProductImage,
  SizeOption,
  Spacer,
} from "@components";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import { SiAdidas } from "react-icons/si";
import colors from "@/theme/colors.module.scss";

export default function Home() {
  return (
    <div className="flex flex-col self-stretch items-center">
      <div className="max-w-[1100px]">
        <div className="self-stretch flex-row flex justify-between items-center">
          <div className="w-[60px]" />
          <SiAdidas size={60} />
          <Cart />
        </div>
        <div className="flex flex-row gap-[50px] p-2">
          <div className="flex flex-col gap-[10px]">
            <ProductImage size={500} imageNumnber={0} borderRadius={10} />
            <div className="flex flex-row gap-[10px] items-center flex-wrap justify-center">
              <FaChevronLeft size={50} color={colors.normalText} />
              <ProductImage size={90} imageNumnber={0} borderRadius={5} />
              <ProductImage size={90} imageNumnber={1} borderRadius={5} />
              <ProductImage size={90} imageNumnber={2} borderRadius={5} />
              <ProductImage size={90} imageNumnber={3} borderRadius={5} />
              <FaChevronRight size={50} color={colors.normalText} />
            </div>
          </div>
          <div className="flex flex-col max-w-[500px] gap-[10px]">
            <SiAdidas size={50} />
            <p
              className="text-[20px] font-semibold"
              style={{ color: colors.normalText }}
            >
              Adidas black t-shirt Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
            <p className="text-[15px] font-bold" style={{ color: "grey" }}>
              Men
            </p>
            <div className="flex flex-row gap-2.5 items-center flex-wrap">
              <div className="flex flex-row gap-1">
                <FaStar size={20} color={colors.gold} />
                <FaStar size={20} color={colors.gold} />
                <FaStar size={20} color={colors.gold} />
                <FaStar size={20} color={colors.gold} />
                <FaStar size={20} color={colors.gold} />
              </div>
              <p
                className="text-[20px] font-extrabold"
                style={{ color: colors.normalText }}
              >
                4.9 of 5
              </p>
              <p
                className="text-[13px] font-bold"
                style={{ color: colors.gray }}
              >
                22 rates
              </p>
            </div>
            <div className="flex flex-row flex-wrap gap-8 items-center">
              <div
                className="flex flex-row gap-2 items-end"
                style={{ color: "purple" }}
              >
                <p className="text-[30px] font-bold">9,000</p>
                <p className="text-[20px] font-normal">LE</p>
              </div>
              <p className="line-through" style={{ color: colors.gray }}>
                9,000 LE
              </p>
              <p
                className="px-2 py-1 rounded-[5px] font-medium"
                style={{ background: colors.gold, color: colors.normalText }}
              >
                30% Off
              </p>
            </div>
            <Spacer />
            <p
              className="text-[20px] font-semibold"
              style={{ color: colors.normalText }}
            >
              Size
            </p>
            <div className="flex flex-row gap-[10px]">
              <SizeOption text="Small" isChosen={false} />
              <SizeOption text="Medium" isChosen={false} />
              <SizeOption text="Large" isChosen />
              <SizeOption text="X Large" isChosen={false} />
              <SizeOption text="XX Large" isChosen={false} />
            </div>
            <Spacer />
            <p
              className="text-[20px] font-semibold"
              style={{ color: colors.normalText }}
            >
              Color
            </p>
            <div className="flex flex-row">
              <ColorOption imgNumber={0} isChosen={true} />
              <ColorOption imgNumber={1} isChosen={false} />
            </div>
            <Spacer />
            <p
              className="text-[20px] font-semibold"
              style={{ color: colors.normalText }}
            >
              Quantity
            </p>
            <QuantityCounter />

            <div className="flex flex-row justify-between gap-4">
              <AddToCart />
              <Button
                style={{ flex: 1 }}
                text={"Pickup From Store"}
                bgColor={colors.secondaryColor}
                textColor={colors.onSecondary}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
