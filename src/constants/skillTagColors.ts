import type { Values } from '@/types/TypeUnion';

export const ColorTags = {
  SLATE: 'SLATE',
  GRAY: 'GRAY',
  DARK: 'DARK',
  ZINC: 'ZINC',
  NEUTRAL: 'NEUTRAL',
  STONE: 'STONE',
  RED: 'RED',
  ORANGE: 'ORANGE',
  AMBER: 'AMBER',
  YELLOW: 'YELLOW',
  LIME: 'LIME',
  GREEN: 'GREEN',
  EMERALD: 'EMERALD',
  TEAL: 'TEAL',
  CYAN: 'CYAN',
  SKY: 'SKY',
  BLUE: 'BLUE',
  INDIGO: 'INDIGO',
  VIOLET: 'VIOLET',
  PURPLE: 'PURPLE',
  FUCHSIA: 'FUCHSIA',
  PINK: 'PINK',
  ROSE: 'ROSE',
} as const;

export const SKILLS = [
  'Astro',
  'JavaScript',
  'Bootstrap',
  'TypeScript',
  'React',
  'TailwindCSS',
  'Redux',
  'Next.js',
  'C#',
  'ASP.NET Core',
  'MS SQL Server',
  'Azure',
] as const;

export type Skills = (typeof SKILLS)[number];

type SkillColorMap = {
  [key in Skills]: Values<typeof ColorTags>;
};

export const SKILL_COLOR_MAP: SkillColorMap = {
  Astro: ColorTags.FUCHSIA,
  JavaScript: ColorTags.YELLOW,
  Bootstrap: ColorTags.INDIGO,
  TypeScript: ColorTags.ROSE,
  React: ColorTags.BLUE,
  TailwindCSS: ColorTags.SKY,
  Redux: ColorTags.CYAN,
  'Next.js': ColorTags.DARK,
  'C#': ColorTags.GREEN,
  'ASP.NET Core': ColorTags.SKY,
  'MS SQL Server': ColorTags.AMBER,
  Azure: ColorTags.BLUE,
} as const;
