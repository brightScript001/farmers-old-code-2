import { ReactComponent as HomeIcon } from '../assets/icons/home.svg';
import { ReactComponent as MarketplaceIcon } from '../assets/icons/marketplace.svg';
import { ReactComponent as InventoryIcon } from '../assets/icons/inventory.svg';
import { ReactComponent as PaymentIcon } from '../assets/icons/payment.svg';
import { ReactComponent as SupportIcon } from '../assets/icons/support.svg';
import { ReactComponent as ProfileIcon } from '../assets/icons/profile.svg';
import { ReactComponent as SignoutIcon } from '../assets/icons/signout.svg';

const navigationItems = [
  {
    key: 'home',
    icon: HomeIcon,
    text: 'Home'
  },
  {
    key: 'marketplace',
    icon: MarketplaceIcon,
    text: 'Marketplace'
  },
  {
    key: 'inventory',
    icon: InventoryIcon,
    text: 'Inventory'
  },
  {
    key: 'payment',
    icon: PaymentIcon,
    text: 'Payment'
  },
  {
    key: 'support',
    icon: SupportIcon,
    text: 'Support'
  },
  {
    key: 'profile',
    icon: ProfileIcon,
    text: 'Profile'
  },
  {
    key: 'signout',
    icon: SignoutIcon,
    text: 'Signout'
  }
];

export default navigationItems;
