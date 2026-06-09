import { ReactNode, useState } from "react";
import Icon from "@/components/ui/icon";

interface AccordionItemProps {
  icon: string;
  title: string;
  subtitle?: string;
  defaultOpen?: boolean;
  children: ReactNode;
}

export default function AccordionItem({ icon, title, subtitle, defaultOpen = false, children }: AccordionItemProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="card-navy overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-4 p-5 text-left"
      >
        <div className="icon-box">
          <Icon name={icon} size={20} />
        </div>
        <div className="flex-1">
          <h3 className="text-white font-bold text-base md:text-lg">{title}</h3>
          {subtitle && <p className="text-white/45 text-sm mt-0.5">{subtitle}</p>}
        </div>
        <Icon
          name="ChevronDown"
          size={20}
          className={`text-brand-gold transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className="grid transition-all duration-400 ease-in-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-6 pt-1 border-t border-white/5 space-y-4 text-white/65 text-[15px] leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
