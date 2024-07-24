// sponsor images
import bird from './assets/Sponser/bird.svg';
import daily from './assets/Sponser/Daily.svg';
import forbes from './assets/Sponser/Forbes.svg';
import pokemon from './assets/Sponser/Pokemon.svg';

// Brands images import

import brand1 from './assets/FeaturedBrand/Eoc.svg';
import brand2 from './assets/FeaturedBrand/FullLogoGoddes.svg';
import brand3 from './assets/FeaturedBrand/Ultimate.svg';
import brand4 from './assets/FeaturedBrand/strategic.svg';
import goddes from './assets/FeaturedBrand/GoddesIcon.svg';
import line from './assets/FeaturedBrand/lastLine.svg';

// footer Links import
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

// Client section images import
import client1 from './assets/Clients/1client.svg';
import client2 from './assets/Clients/2client.svg';
import client3 from './assets/Clients/3client.svg';
import client4 from './assets/Clients/4client.svg';
import client5 from './assets/Clients/5client.svg';
import client6 from './assets/Clients/6client.svg';
import client7 from './assets/Clients/7client.svg';
export const links = [
  {
    id: 1,
    text: 'About',
  },
  {
    id: 2,
    text: 'Speaker',
  },
  {
    id: 3,
    text: 'Reviews',
  },

  {
    id: 5,
    text: 'Contact',
  },
];

export const SponsorImg = [
  {
    id: 1,
    image: pokemon,
  },
  {
    id: 2,
    image: forbes,
  },
  {
    id: 3,
    image: daily,
  },

  {
    id: 5,
    image: bird,
  },
];

export const brands = [
  {
    img: brand1,
    bgColor: '#131313',
    label: 'Elements of',
    labelHalf: 'Community Podcast',
    bgTransitionClass: 'group-hover:translate-x-[10%]',
    bgImage: brand1,
  },
  {
    img: brand2,
    bgColor: '#202020',
    label: 'Goddess ',
    labelHalf: 'Provenance',
    bgTransitionClass: 'group-hover:translate-y-[-20px]',
    bgImage: goddes,
  },
  {
    img: brand3,
    bgColor: '#1E3566',
    label: 'Ultimate credibility',
    labelHalf: ' Bootcamp',
    bgTransitionClass: 'group-hover:translate-x-[10%]',
    bgImage: brand3,
  },
  {
    img: brand4,
    bgColor: '#1A2E35',
    label: 'Strategic Influence',
    labelHalf: ' Workshop',
    bgTransitionClass: 'group-hover:translate-x-[-30%]',
    bgImage: line,
  },
];

export const clientsData = [
  {
    id: 1,
    image: client1,
    ClientName: 'Laina Gossman',
    company: 'Owner, Soul Insole',
    para: 'Lucas is one of those rare humans who actually knows a lot about a lot. Despite the fact that he is very well read and insightful, he is also a great listener which makes him easy to talk to one-on-one but also an excellent leader in group settings.',
  },
  {
    id: 2,
    image: client2,
    ClientName: 'Corey Finnie',
    company: 'Managing Director, Abundare',
    para: 'I really appreciated listening to Lucas speak about how he supports himself throughout the day. I tend to be someone who goes with the flow, and hearing him talk about his daily routines and rituals was illuminating. I also appreciated his feedback about strategy. I’m looking forward to incorporating his feedback!',
  },
  {
    id: 3,
    image: client3,
    ClientName: 'Jade Dadiz',
    company: 'Cofounder, Emanant Wellness',
    para: 'I’m so grateful to have met Lucas and had the privilege of hearing him speak. It’s not often that somebody will come along and say what needs to be said, what might make other people uncomfortable, but absolutely is beneficial to listen to. I feel like I learned a lot today.',
  },

  {
    id: 4,
    image: client4,
    ClientName: 'Garrison Fletcher',
    company: 'Owner, Apex Type and Graphics',
    para: 'I was recently at a networking event where different business owners get together to learn more about each other and what their respective business are. At this Friday afternoon meeting they had a “Featured Speaker” named Lucas Root.',
  },
  {
    id: 5,
    image: client5,
    ClientName: 'Mazin Biviji',
    company: 'CEO, Toquity',
    para: 'I met Lucas earlier this week and had a really good conversation regarding the challenges we are facing around strategic objectives for the future.',
  },
  {
    id: 6,
    image: client6,
    ClientName: 'Skye Gallagher',
    company: 'Founder, Think Healthy Marketing',
    para: 'Just listening to Lucas talk about strategy changed everything for me. He is incredibly wise and I highly recommend his course and his programs!',
  },
  {
    id: 7,
    image: client7,
    ClientName: 'Christopher Lee',
    company: 'The Explaining Extraordinary Podcast',
    para: 'Lucas’s message and approach really connected with my broader audience! I loved that he was able to talk about the full scope of business, but still able to bring immediate action steps that my audience could implement today. I would have him back on the show at any time!',
  },
];

export const footerLink = [
  {
    id: 1,
    image: <FaTwitter className='text-white sm:text-3xl ' />,
    url: 'https://www.twitter.com/',
  },
  {
    id: 2,
    image: <FaLinkedin className='text-white sm:text-3xl ' />,
    url: 'https://www.linkedin.com/',
  },
  {
    id: 3,
    image: <FaInstagram className='text-white sm:text-3xl ' />,
    url: 'https://www.instagram.com/',
  },
];
