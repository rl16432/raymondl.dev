import { GradientText } from './GradientText';

interface IBulletListProps {
  points: BulletPoint[];
}

export interface BulletPoint {
  title?: string;
  description: string;
}

const BulletList = ({ points }: IBulletListProps) => {
  return (
    <ul className="flex-auto list-none space-y-2 text-lg">
      {points.map((p) => (
        <li>
          {p.title !== undefined ? (
            <>
              <span className="font-bold">
                <GradientText>{p.title}</GradientText>
              </span>{' '}
              - {p.description}
            </>
          ) : (
            p.description
          )}
        </li>
      ))}
    </ul>
  );
};

export { BulletList };
