// src/data/contactData.ts
//
// Single source of truth for contact details and social links.
// Consumed by both the site footer and the Contact page so the two cannot drift.

import type { IconType } from 'react-icons';
import { FaXTwitter, FaLinkedin, FaTiktok, FaFacebook } from 'react-icons/fa6';

export interface SocialLink {
  name: string;
  href: string;
  icon: IconType;
  /** Used verbatim for aria-label on the Contact page ("Follow us on X"). */
  label: string;
}

export const phoneNumber = '+234 807 445 8695';

export const emailAddress = 'support@chetacare.com';

/** Office addresses, in the order they should be displayed. */
export const addresses: string[] = [
  'No. 28, Ologbo Quarters, Ologuneru - Eleyele, Ibadan, Oyo State, Nigeria.',
  'No. 4, Abepe Oduwaye Community, Adedeji Close, Ido-Eruwa Road, Ologuneru, Ibadan.',
];

export const socialLinks: SocialLink[] = [
  { name: 'X', href: 'https://x.com/chetacare', icon: FaXTwitter, label: 'Follow us on X' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/chetacare/', icon: FaLinkedin, label: 'Follow us on LinkedIn' },
  { name: 'Facebook', href: 'https://www.facebook.com/people/Chetacare/100066576465988/', icon: FaFacebook, label: 'Follow us on Facebook' },
  { name: 'TikTok', href: 'https://www.tiktok.com/@chetacare', icon: FaTiktok, label: 'Follow us on TikTok' },
];
