import Image from "next/image";

type ProjectCardProps = {
  title: string;
  subtitle: string;
  href: string;
  imageSrc: string;
};

export default function ProjectCard({ title, subtitle, href, imageSrc }: ProjectCardProps) {
  return (
    <div className="rounded-xl border border-[var(--stroke)] bg-[var(--surface-2)] overflow-hidden flex flex-col">
      {/* Preview */}
      <div className="aspect-[16/10] relative">
        <Image
          src={imageSrc}
          alt={`${title} preview`}
          fill
          className="object-cover"
        />
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div>
          <div className="font-medium">{title}</div>
          <div className="subtle text-sm -mt-0.5">{subtitle}</div>
        </div>
        <div className="mt-3">
          <a
            href={href}
            target="_blank"                
            rel="noopener noreferrer"      
            className="btn btn-accent"
          >
            Visit
          </a>
        </div>
      </div>
    </div>
  );
}