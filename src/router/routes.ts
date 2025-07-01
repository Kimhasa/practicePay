export interface RouteConfig {
  path: string;
  name: string;
  component: React.ComponentType;
  exact?: boolean;
}

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact'
} as const;

export type RouteKeys = keyof typeof ROUTES; 