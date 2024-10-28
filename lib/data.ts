import { City, AdvisorType } from './types';

export const ukCities: City[] = [
  { id: '1', name: 'London', slug: 'london' },
  { id: '2', name: 'Manchester', slug: 'manchester' },
  { id: '3', name: 'Birmingham', slug: 'birmingham' },
  { id: '4', name: 'Bristol', slug: 'bristol' },
  { id: '5', name: 'Leeds', slug: 'leeds' },
  { id: '6', name: 'Edinburgh', slug: 'edinburgh' },
  { id: '7', name: 'Glasgow', slug: 'glasgow' },
  { id: '8', name: 'Liverpool', slug: 'liverpool' },
  { id: '9', name: 'Cardiff', slug: 'cardiff' },
  { id: '10', name: 'Belfast', slug: 'belfast' }
];

export const advisorTypes: AdvisorType[] = [
  {
    id: '1',
    name: 'Mortgage Advisors',
    slug: 'mortgage-advisors',
    description: 'Expert guidance for your home financing needs',
    icon: 'Briefcase'
  },
  {
    id: '2',
    name: 'Solicitors',
    slug: 'solicitors',
    description: 'Legal expertise for various matters',
    icon: 'GavelIcon'
  },
  {
    id: '3',
    name: 'Wealth Managers',
    slug: 'wealth-managers',
    description: 'Strategies for financial growth',
    icon: 'PiggyBank'
  }
];