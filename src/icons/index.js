import FavoritesIcon from './FavoritesIcon';
import HomeIcon from './HomeIcon';
import ProfileIcon from './ProfileIcon';
import SearchIcon from './SearchIcon';

export const ICONS = {
  home: (color, size) => (
    <HomeIcon width={size} height={size} fill={color} stroke={color} />
  ),
  search: (color, size) => (
    <SearchIcon width={size} height={size} stroke={color} />
  ),
  favorites: (color, size) => (
    <FavoritesIcon width={size} height={size} fill={color} />
  ),
  profile: (color, size) => (
    <ProfileIcon width={size} height={size} fill={color} />
  ),
};
