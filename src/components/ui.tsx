import Link from 'next/link';
import { ReactNode, ReactElement } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`card ${className}`}>
      {children}
    </div>
  );
}

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export function Button({ 
  children, 
  href, 
  onClick, 
  target, 
  rel, 
  className = '',
  type = 'button'
}: ButtonProps) {
  const baseClasses = `btn ${className}`;
  
  if (href) {
    return (
      <a 
        href={href} 
        target={target} 
        rel={rel}
        className={baseClasses}
      >
        {children}
      </a>
    );
  }
  
  return (
    <button 
      type={type}
      onClick={onClick}
      className={baseClasses}
    >
      {children}
    </button>
  );
}

interface SectionProps {
  children: ReactNode;
  title?: string;
  className?: string;
}

export function Section({ children, title, className = '' }: SectionProps) {
  return (
    <section className={`section ${className}`}>
      {title && <h2 className="heading-secondary">{title}</h2>}
      {children}
    </section>
  );
}

interface HeadingProps {
  children: ReactNode;
  level?: 1 | 2 | 3;
  className?: string;
}

export function Heading({ children, level = 1, className = '' }: HeadingProps) {
  const baseClass = level === 1 ? 'heading-primary' : 
                   level === 2 ? 'heading-secondary' : 
                   'heading-tertiary';
  
  const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;
  
  return (
    <Tag className={`${baseClass} ${className}`}>
      {children}
    </Tag>
  );
}

interface HeaderProps {
  title: string | ReactElement;
  subtitle?: string;
  link?: string;
  className?: string;
}

export function Header({ title, subtitle, link = '', className = '' }: HeaderProps) {
  return (
    <header className={`site-header ${className}`}>
      <Heading level={1}>
        {link ? (
          <Link href={link}>
            {title}
          </Link>
        ) : (
          title
        )}
      </Heading>
      {subtitle && <p className="subtitle">{subtitle}</p>}
    </header>
  );
}

interface TextProps {
  children: ReactNode;
  size?: 'base' | 'large';
  className?: string;
}

export function Text({ children, size = 'base', className = '' }: TextProps) {
  const sizeClass = size === 'large' ? 'text-large' : 'text-base';
  
  return (
    <p className={`text ${sizeClass} ${className}`}>
      {children}
    </p>
  );
}

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function PageContainer({ children, className = '' }: ContainerProps) {
  return (
    <div className={`page-container ${className}`}>
      {children}
    </div>
  );
}

export function ContentWrapper({ children, className = '' }: ContainerProps) {
  return (
    <div className={`content-wrapper ${className}`}>
      {children}
    </div>
  );
}

interface FooterProps {
  children: ReactNode;
  className?: string;
}

export function Footer({ children, className = '' }: FooterProps) {
  return (
    <footer className={`site-footer ${className}`}>
      {children}
    </footer>
  );
}

interface ButtonGroupProps {
  children: ReactNode;
  className?: string;
}

export function ButtonGroup({ children, className = '' }: ButtonGroupProps) {
  return (
    <div className={`btn-group ${className}`}>
      {children}
    </div>
  );
}

interface CardGridProps {
  children: ReactNode;
  className?: string;
}

export function CardGrid({ children, className = '' }: CardGridProps) {
  return (
    <div className={`card-grid ${className}`}>
      {children}
    </div>
  );
}

interface QuoteProps {
  children: ReactNode;
  author?: string;
  className?: string;
}

export function Quote({ children, author, className = '' }: QuoteProps) {
  return (
    <blockquote className={`quote ${className}`}>
      <Text className="quote-text">
        <i>{children}</i>
      </Text>
      {author && (
        <Text className="quote-attribution">
          -- { author }
        </Text>
      )}
    </blockquote>
  )
}