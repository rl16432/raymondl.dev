type IHeroSocialProps = {
  src: string;
  alt: string;
};

const HeroSocial = (props: IHeroSocialProps) => (
  <img
    className="h-10 w-10 hover:translate-y-1"
    src={props.src}
    alt={props.alt}
  />
);

export { HeroSocial };
