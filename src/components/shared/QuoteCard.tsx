import { Heart } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

interface QuoteCardProps {
  quote: string;
  author?: string;
  className?: string;
}

export const QuoteCard = ({ quote, author = 'Lucy Bonifas', className = '' }: QuoteCardProps) => {
  return (
    <AnimatedSection className={`w-full ${className}`}>
      <div className="relative rounded-3xl p-8 md:p-12 text-center overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgba(0,229,179,0.06) 0%, rgba(255,77,157,0.06) 100%)',
          border: '1px solid rgba(0,229,179,0.2)',
        }}
      >
        {/* Decorative corner blobs */}
        <div className="absolute top-0 left-0 w-40 h-40 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(0,229,179,0.1) 0%, transparent 70%)', transform: 'translate(-40%, -40%)' }} />
        <div className="absolute bottom-0 right-0 w-40 h-40 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(255,77,157,0.1) 0%, transparent 70%)', transform: 'translate(40%, 40%)' }} />

        <div className="flex justify-center mb-6">
          <div className="w-12 h-12 rounded-2xl gradient-bg-pink flex items-center justify-center glow-pink-sm">
            <Heart className="w-5 h-5 text-white fill-white" />
          </div>
        </div>

        <blockquote className="text-foreground/85 text-base md:text-xl leading-relaxed italic max-w-3xl mx-auto mb-6 font-medium">
          &ldquo;{quote}&rdquo;
        </blockquote>

        <p className="gradient-text font-bold text-base">— {author}</p>
      </div>
    </AnimatedSection>
  );
};
