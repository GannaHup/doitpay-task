import { IconCurrencyDollar } from "@tabler/icons-react";
import type React from "react";
import type { WalletCardProps } from "./WalletCard.types";
import formatter from "@libs/formatter";
import { contrastRatio } from "@libs/color-contrast";
import { cn } from "@libs/classnames";

const WalletCard: React.FC<WalletCardProps> = ({ wallet, onSeeDetail }) => {
  const textColor = (() => {
    const brightTextRatio = contrastRatio(wallet.color, "#f8fafc");
    if (brightTextRatio >= 3) {
      return "text-slate-50";
    } else {
      return "text-slate-900";
    }
  })();

  return (
    <div
      className="flex flex-col gap-2 rounded-lg w-full p-2 cursor-pointer"
      style={{ backgroundColor: wallet.color }}
      onClick={() => onSeeDetail(wallet)}
    >
      <IconCurrencyDollar size={32} className={textColor} />

      <div className="flex flex-col gap-1">
        <div className={cn("text-sm", textColor)}>{wallet.holder}</div>
        <div className={cn("text-sm", textColor)}>
          {formatter.maskCardNumber(wallet.number)}
        </div>
        <div className={cn("text-xs", textColor)}>Expiry</div>
        <div className={cn("text-sm", textColor)}>
          {formatter.dateMMYYYY(wallet.expiredAt)}
        </div>
      </div>
    </div>
  );
};

export default WalletCard;
