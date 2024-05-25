interface LinksProps {
    icon: string;
    text: string;
    link: string;
    target? : boolean;

}
export function Links({ icon, text, link, target }: LinksProps) {
  return (
    <div className="bg-rose-200 w-[90%] h-24 rounded-xl">
      <a
        className="flex gap-3 items-center justify-center h-full px-5"
        href={link}
        target={target ? "_blank" : "_self"}
      >
        <i className={`fa ${icon} text-5xl text-rose-600`} />
        <span className="text-xl">{text}</span>
      </a>
    </div>
  );
}
