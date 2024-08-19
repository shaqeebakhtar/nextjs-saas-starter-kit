'use client';

import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { CheckIcon } from 'lucide-react';
import Link from 'next/link';
import { Dispatch, SetStateAction, useState } from 'react';

type Plan = {
  tier: string;
  description: string;
  price: {
    monthly: number;
    annualy: number;
  };
  highlight?: {
    text: string;
    color: string;
  };
  cta: {
    text: string;
    href: string;
    variant:
      | 'link'
      | 'default'
      | 'destructive'
      | 'outline'
      | 'secondary'
      | 'ghost'
      | null
      | undefined;
    classNames: string;
  };
  benefits: string[];
};

export const plans: Plan[] = [
  {
    tier: 'Free',
    description: 'For hobby, side projects, & trial',
    price: {
      monthly: 0,
      annualy: 0,
    },
    cta: {
      text: 'Get started for Free',
      href: '#',
      variant: 'outline',
      classNames: 'hover:bg-primary hover:text-white',
    },
    benefits: ['Benefit Item', 'Benefit Item', 'Benefit Item', 'Benefit Item'],
  },
  {
    tier: 'Pro',
    description: 'For small teams',
    price: {
      monthly: 25,
      annualy: 20,
    },
    highlight: {
      text: 'Popular',
      color: 'violet-600',
    },
    cta: {
      text: 'Get started for Pro',
      href: '#',
      variant: 'default',
      classNames: 'bg-violet-600 text-white hover:bg-violet-700',
    },
    benefits: [
      'Benefit Item',
      'Benefit Item',
      'Benefit Item',
      'Benefit Item',
      'Benefit Item',
      'Benefit Item',
    ],
  },
  {
    tier: 'Business',
    description: 'For larger teams',
    price: {
      monthly: 49,
      annualy: 39,
    },
    cta: {
      text: 'Get started for Business',
      href: '#',
      variant: 'default',
      classNames: '',
    },
    benefits: [
      'Benefit Item',
      'Benefit Item',
      'Benefit Item',
      'Benefit Item',
      'Benefit Item',
      'Benefit Item',
      'Benefit Item',
      'Benefit Item',
      'Benefit Item',
    ],
  },
];

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section className="max-w-screen-xl w-full mx-auto py-10 px-3 lg:py-16 lg:px-16">
      <h2 className="text-center text-3xl md:text-5xl font-bold font-title max-w-[820px] mx-auto leading-[1.15] md:leading-[1.15]">
        Simple and transparent, Plans and Pricing
      </h2>
      <p className="md:text-lg leading-6 text-center text-muted-foreground mx-auto max-w-[680px] mt-4">
        Start for free, no credit card needed and pay as you grow.
      </p>
      <div className="mt-10 flex justify-center">
        <PricingToggle isAnnual={isAnnual} setIsAnnual={setIsAnnual} />
      </div>
      <div className="grid gap-4 mt-10 md:mt-20 grid-cols-1 md:grid-cols-3">
        {plans.map((plan) => (
          <PricingCard key={plan.tier} plan={plan} isAnnual={isAnnual} />
        ))}
      </div>
    </section>
  );
};

export default Pricing;

const PricingToggle = ({
  isAnnual,
  setIsAnnual,
}: {
  isAnnual: boolean;
  setIsAnnual: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className="inline-flex items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground">
      <Button
        variant={'ghost'}
        className={cn(
          'bg-transparent shadow-none rounded-md text-primary w-40 font-semibold data-[state=active]:bg-white'
        )}
        onClick={() => setIsAnnual(false)}
        aria-selected={isAnnual}
        data-state={isAnnual ? 'inactive' : 'active'}
      >
        Monthly
      </Button>
      <Button
        variant={'ghost'}
        className={cn(
          'bg-transparent shadow-none rounded-md text-primary w-40 font-semibold data-[state=active]:bg-white'
        )}
        onClick={() => setIsAnnual(true)}
        aria-selected={isAnnual}
        data-state={isAnnual ? 'active' : 'inactive'}
      >
        Annualy
        <span
          className={cn(
            'bg-muted text-muted-foreground px-1.5 py-0.5 rounded-full ml-2 text-xs font-medium',
            !isAnnual && 'bg-white'
          )}
        >
          Save 35%
        </span>
      </Button>
    </div>
  );
};

const PricingCard = ({ plan, isAnnual }: { plan: Plan; isAnnual: boolean }) => {
  return (
    <div
      className={cn(
        'relative border bg-white shadow-sm p-6 rounded-lg',
        plan.highlight &&
          'border-violet-600 shadow-xl shadow-violet-100 mt-10 md:mt-0 rounded-b-lg rounded-t-none'
      )}
    >
      {plan.highlight && (
        <div className="h-9 bg-violet-600 border-2 border-violet-600 uppercase tracking-widest text-center p-2.5 text-white text-sm leading-[1.15] font-medium rounded-t-lg absolute -top-9 -inset-x-[1px]">
          {plan.highlight.text}
        </div>
      )}
      <h3 className="text-2xl font-semibold font-title">{plan.tier}</h3>
      <p className="text-sm text-muted-foreground">{plan.description}</p>
      <div className="space-y-2 my-6">
        <p className="text-5xl font-semibold">
          ${isAnnual ? plan.price.annualy : plan.price.monthly}
        </p>
        {plan.tier === 'Free' ? (
          <p className="text-sm text-muted-foreground">Free forever</p>
        ) : (
          <p className="text-sm text-muted-foreground">
            /month{isAnnual ? ', billed annualy' : ', billed monthly'}
          </p>
        )}
      </div>
      <Link
        href={plan.cta.href}
        className={cn(
          buttonVariants({ variant: plan.cta.variant }),
          'w-full rounded-full h-10 font-semibold',
          plan.cta.classNames
        )}
      >
        {plan.cta.text}
      </Link>
      <ul className="my-8 px-1.5 space-y-2.5">
        {plan.benefits.map((benefit, index) => (
          <li key={index} className="flex items-center space-x-2">
            <CheckIcon
              strokeWidth={3}
              className="w-5 h-5 text-muted-foreground bg-gray-100 p-1 rounded-sm"
            />
            <span className="text-sm text-gray-700">{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
