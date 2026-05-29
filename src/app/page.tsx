import { HeroSection } from '@/components/home/HeroSection';
import { LiveTicker } from '@/components/home/LiveTicker';
import { PrizesSection } from '@/components/home/PrizesSection';
import { ProcessSection } from '@/components/home/ProcessSection';
import { RealStoriesSection } from '@/components/home/RealStoriesSection';
import { WinnersSection } from '@/components/home/WinnersSection';
import { StatsSection } from '@/components/home/StatsSection';
import { VideoSection } from '@/components/home/VideoSection';
import { FaqSection } from '@/components/home/FaqSection';
import { ApplyCtaSection } from '@/components/home/ApplyCtaSection';

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <LiveTicker />
      <PrizesSection />
      <ProcessSection />
      <RealStoriesSection />
      <WinnersSection />
      <StatsSection />
      <VideoSection />
      <FaqSection />
      <ApplyCtaSection />
    </div>
  );
}
