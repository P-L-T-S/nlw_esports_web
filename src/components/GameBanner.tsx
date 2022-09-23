interface IProps {
  name: string;
  banner: string;
  ads: number;
}

export function GameBanner({ name, banner, ads }: IProps) {
  return (
    <a href="" className="relative rounded-lg overflow-hidden">
      <img src={banner} alt="" />
      <div className="w-full pt-16 pb-4 px-4 bg-sub-title-gradient absolute right-0 left-0 bottom-0">
        <strong className="font-bold text-white block">{name}</strong>
        <span className="text-zinc-300 text-sm block">{ads} anúncio(s)</span>
      </div>
    </a>
  );
}
