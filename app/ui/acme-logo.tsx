import { GlobeAltIcon } from '@heroicons/react/24/outline';

export default function AcmeLogo() {
  return (
    <div 
      dir='rtl'
      className={`flex flex-row items-center leading-none text-white`}
    >
      <p className="text-[44px]">ئاکمه</p>
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
    </div>
  );
}
