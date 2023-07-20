import { Section } from '@/components';

const Footer = () => (
  <Section>
    <div className="border-t border-gray-600 pt-5">
      <div className="text-sm text-gray-200">
        Initial{' '}
        <a
          className="text-cyan-400 hover:underline"
          href="https://github.com/ixartz/Astro-boilerplate"
        >
          theme
        </a>{' '}
        supplied with ♥ by{' '}
        <a
          className="text-cyan-400 hover:underline"
          href="https://creativedesignsguru.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          CreativeDesignsGuru
        </a>
      </div>
    </div>
  </Section>
);

export { Footer };
