import {
  Trophy,
  Home,
  Banknote,
  Sparkles,
  Gift,
  Car,
  type LucideIcon,
} from 'lucide-react';
import { MAX_LUMP_SUM_PRIZE, SUPER_PRIZE_AMOUNT } from '@/lib/site';

export type PrizeGroupId =
  | 'super-mega'
  | 'weekly-life'
  | 'dream-home'
  | 'cash'
  | 'daily'
  | 'vehicle';

export type ImpactFilter =
  | 'All'
  | 'SuperPrize'
  | 'Weekly For Life'
  | 'Dream Home'
  | 'Cash Prize'
  | 'Daily Drawing'
  | 'Vehicle Prize';

export interface PrizeGroup {
  id: PrizeGroupId;
  title: string;
  amountRange: string;
  shortDescription: string;
  longDescription: string;
  icon: LucideIcon;
  impactFilter: Exclude<ImpactFilter, 'All'>;
}

export interface PrizeTier {
  id: string;
  groupId: PrizeGroupId;
  tierName: string;
  applyLabel: string;
  amount: string;
  shortDescription: string;
}

/** Category buckets for /areas and /impact filters */
export const PRIZE_GROUPS: PrizeGroup[] = [
  {
    id: 'super-mega',
    title: 'Mega Prize & SuperPrize',
    amountRange: `Up to ${MAX_LUMP_SUM_PRIZE}`,
    shortDescription: `Flagship lump-sum prizes — from ${SUPER_PRIZE_AMOUNT} SuperPrizes up to ${MAX_LUMP_SUM_PRIZE} Mega Prize.`,
    longDescription:
      `Our largest drawings award life-changing lump-sum cash prizes. Real winners receive varied amounts — $1,000,000, ${SUPER_PRIZE_AMOUNT}, ${MAX_LUMP_SUM_PRIZE} Mega Prize, and more — selected at random and notified by email.`,
    icon: Trophy,
    impactFilter: 'SuperPrize',
  },
  {
    id: 'weekly-life',
    title: 'Weekly For Life',
    amountRange: '$5,000/week',
    shortDescription: 'Guaranteed weekly payments for life.',
    longDescription:
      'Guaranteed weekly payments for life — one of PCH\'s most sought-after prizes. Winners receive consistent income that can transform a family\'s financial future for decades.',
    icon: Banknote,
    impactFilter: 'Weekly For Life',
  },
  {
    id: 'dream-home',
    title: 'Dream Home & Property',
    amountRange: 'Up to $500,000',
    shortDescription: 'A home or cash equivalent — winner\'s choice.',
    longDescription:
      'Win a beautiful home or take the cash equivalent — your choice. Winners have used these awards to secure housing, pay off mortgages, or rebuild after disaster across North America and beyond.',
    icon: Home,
    impactFilter: 'Dream Home',
  },
  {
    id: 'cash',
    title: 'Cash Prizes',
    amountRange: '$25,000 – $250,000',
    shortDescription: 'Mid-tier cash awards in varied amounts throughout the year.',
    longDescription:
      'Cash prizes awarded in random drawings at many different amounts. Winners receive $25,000, $100,000, $250,000, and other real amounts — not one fixed figure.',
    icon: Sparkles,
    impactFilter: 'Cash Prize',
  },
  {
    id: 'daily',
    title: 'Daily Cash Drawings',
    amountRange: '$5,000 – $10,000/day',
    shortDescription: 'New winners selected every day.',
    longDescription:
      'New winners selected every day at varied amounts. Submit your application once and remain eligible for daily cash drawings throughout the year.',
    icon: Gift,
    impactFilter: 'Daily Drawing',
  },
  {
    id: 'vehicle',
    title: 'Vehicle & Luxury Prizes',
    amountRange: 'Up to $50,000',
    shortDescription: 'Luxury vehicle or cash option.',
    longDescription:
      'Drive away in a luxury vehicle or choose the cash option. Awarded in random drawings to applicants worldwide.',
    icon: Car,
    impactFilter: 'Vehicle Prize',
  },
];

/** Prize amounts — apply dropdown + winner references */
export const PRIZE_TIERS: PrizeTier[] = [
  // Mega Prize & SuperPrize
  { id: '2.5m-mega', groupId: 'super-mega', tierName: 'Mega Prize', applyLabel: '$2,500,000 Mega Prize', amount: '$2,500,000', shortDescription: 'Top Mega Prize lump-sum award.' },
  { id: '1.25m-superprize', groupId: 'super-mega', tierName: 'SuperPrize', applyLabel: '$1,250,000 SuperPrize', amount: '$1,250,000', shortDescription: 'Major SuperPrize lump-sum award.' },
  { id: '1m-superprize', groupId: 'super-mega', tierName: 'SuperPrize', applyLabel: '$1,000,000 SuperPrize', amount: '$1,000,000', shortDescription: 'Classic $1M SuperPrize drawing.' },

  // Weekly For Life
  { id: '5k-weekly-life', groupId: 'weekly-life', tierName: 'Weekly For Life', applyLabel: '$5,000 A Week For Life', amount: '$5,000/week', shortDescription: 'Guaranteed $5,000 every week for life.' },
  { id: '2.5k-weekly-life', groupId: 'weekly-life', tierName: 'Weekly For Life', applyLabel: '$2,500 A Week For Life', amount: '$2,500/week', shortDescription: 'Guaranteed $2,500 every week for life.' },

  // Dream Home
  { id: '500k-dream-home', groupId: 'dream-home', tierName: 'Dream Home', applyLabel: '$500,000 Dream Home', amount: '$500,000', shortDescription: 'Dream home or cash equivalent.' },
  { id: '350k-dream-home', groupId: 'dream-home', tierName: 'Dream Home', applyLabel: '$350,000 Dream Home', amount: '$350,000', shortDescription: 'Home prize or cash option.' },

  // Cash Prizes (varied amounts)
  { id: '250k-cash', groupId: 'cash', tierName: 'Cash Prize', applyLabel: '$250,000 Cash Prize', amount: '$250,000', shortDescription: 'Quarter-million cash award.' },
  { id: '150k-cash', groupId: 'cash', tierName: 'Cash Prize', applyLabel: '$150,000 Cash Prize', amount: '$150,000', shortDescription: 'Mid-size cash prize.' },
  { id: '100k-cash', groupId: 'cash', tierName: 'Cash Prize', applyLabel: '$100,000 Cash Prize', amount: '$100,000', shortDescription: 'Six-figure cash award.' },
  { id: '25k-cash', groupId: 'cash', tierName: 'Cash Prize', applyLabel: '$25,000 Cash Prize', amount: '$25,000', shortDescription: 'Cash prize drawing.' },

  // Daily Drawings
  { id: '10k-daily', groupId: 'daily', tierName: 'Daily Drawing', applyLabel: '$10,000 Daily Drawing', amount: '$10,000', shortDescription: 'Daily $10,000 winner drawing.' },
  { id: '5k-daily', groupId: 'daily', tierName: 'Daily Drawing', applyLabel: '$5,000 Daily Drawing', amount: '$5,000', shortDescription: 'Daily $5,000 winner drawing.' },

  // Vehicle
  { id: '50k-vehicle', groupId: 'vehicle', tierName: 'Vehicle Prize', applyLabel: '$50,000 Vehicle Prize', amount: '$50,000', shortDescription: 'Luxury vehicle or cash option.' },
];

/** Headline amounts for homepage cards */
export const FEATURED_PRIZE_TIERS: PrizeTier[] = [
  '2.5m-mega',
  '1.25m-superprize',
  '1m-superprize',
  '500k-dream-home',
  '250k-cash',
  '100k-cash',
  '5k-weekly-life',
  '10k-daily',
].map((id) => PRIZE_TIERS.find((t) => t.id === id)!);

export const IMPACT_FILTERS: ImpactFilter[] = [
  'All',
  ...PRIZE_GROUPS.map((g) => g.impactFilter),
];

/** Apply form dropdown — all tiers grouped by category */
export const APPLY_PRIZE_OPTIONS = [
  { value: 'all' as const, label: 'All Active Prizes' },
  ...PRIZE_GROUPS.flatMap((group) => {
    const tiers = PRIZE_TIERS.filter((t) => t.groupId === group.id);
    return tiers.map((t) => ({ value: t.id, label: t.applyLabel, group: group.title }));
  }),
];

export function getPrizeGroup(id: PrizeGroupId): PrizeGroup | undefined {
  return PRIZE_GROUPS.find((g) => g.id === id);
}

export function getPrizeTier(id: string): PrizeTier | undefined {
  return PRIZE_TIERS.find((t) => t.id === id);
}

export function tiersForGroup(groupId: PrizeGroupId): PrizeTier[] {
  return PRIZE_TIERS.filter((t) => t.groupId === groupId);
}

/** Eligible regions — shown on /areas, not a prize category */
export const ELIGIBLE_REGIONS = {
  title: 'Who can apply',
  description:
    'Applications are open to legal residents of the United States, Canada, United Kingdom, Germany, Australia, New Zealand, and other eligible countries where permitted by law.',
  regions: ['USA', 'Canada', 'United Kingdom', 'Germany', 'Australia', 'New Zealand', 'France', 'Netherlands', 'Ireland'],
};
