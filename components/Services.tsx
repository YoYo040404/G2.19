import React from 'react';
import { MessageCircle, Hammer, LayoutGrid, Wrench, AlignJustify, Zap, Scissors, Ruler } from 'lucide-react';

const services = [
  {
    Icon: Hammer,
    title: "התקנת פרקט",
    desc: "למינציה, עץ מלא ופולימרי — כל השיטות",
    waText: "היי ג'ריקו, אשמח לשאול לגבי התקנת פרקט",
  },
  {
    Icon: LayoutGrid,
    title: "פישבון ותלת-שכבתי",
    desc: "הדבקה מדויקת בכל הסוגים",
    waText: "היי ג'ריקו, אשמח לשאול לגבי פרקט פישבון",
  },
  {
    Icon: Wrench,
    title: "תיקוני פרקט",
    desc: "נפיחה, חריקות, פערים — כל הסוגים",
    waText: "היי ג'ריקו, אשמח לשאול לגבי תיקון פרקט",
  },
  {
    Icon: AlignJustify,
    title: "שטיחים מקיר לקיר",
    desc: "התקנה מלאה, גזירה ומסגור",
    waText: "היי ג'ריקו, אשמח לשאול לגבי שטיחים מקיר לקיר",
  },
  {
    Icon: Zap,
    title: "הדבקה ומתיחת שטיחים",
    desc: "שיטה אמריקאית והולנדית",
    waText: "היי ג'ריקו, אשמח לשאול לגבי מתיחת שטיחים",
  },
  {
    Icon: Scissors,
    title: "תיקוני שטיחים",
    desc: "כל סוגי התיקונים, מתיחה מחדש",
    waText: "היי ג'ריקו, אשמח לשאול לגבי תיקון שטיח",
  },
  {
    Icon: Ruler,
    title: "חידוש והתקנת דקים",
    desc: "גימורים ישרים ונקיים",
    waText: "היי ג'ריקו, אשמח לשאול לגבי דקים",
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="pt-0 pb-16 bg-white">
      <div className="container mx-auto px-6 md:px-12">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b border-black pb-4 mt-6 md:mt-8 reveal">
          <div>
            <h2 className="text-5xl md:text-7xl font-black text-timber-black tracking-tight">
              פרקטים, שטיחים ודקים
            </h2>
            <p className="text-xl mt-4 font-light text-gray-500">
              התקנה, תיקונים וגימור — לפי מצב התשתית והחומרים
            </p>
          </div>
        </div>

        {/* 7-Card Service Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 reveal delay-100">
          {services.map((svc, i) => (
            <a
              key={i}
              href={`https://wa.me/972543962871?text=${encodeURIComponent(svc.waText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col bg-gray-50 border border-gray-200 hover:border-timber-black hover:bg-white transition-all duration-300 p-5 md:p-6"
            >
              <svc.Icon className="w-7 h-7 text-timber-accent mb-4 shrink-0 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-base md:text-lg font-black text-timber-black leading-snug mb-2">
                {svc.title}
              </h3>
              <p className="text-xs md:text-sm text-gray-500 font-light leading-snug flex-grow mb-4">
                {svc.desc}
              </p>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-timber-black group-hover:text-timber-accent transition-colors">
                <MessageCircle className="w-3.5 h-3.5" />
                שאלו בוואטסאפ
              </span>
            </a>
          ))}
        </div>

        {/* Microcopy */}
        <p className="mt-8 text-center text-gray-500 font-light text-sm reveal delay-200">
          לא בטוחים מה מתאים? שלחו תמונה קצרה — ותקבלו הסבר ישיר.
        </p>
      </div>
    </section>
  );
};

export default Services;
