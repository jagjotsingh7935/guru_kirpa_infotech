export interface Service {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  tags: string[];
  deliverables: string[];
  highlight?: boolean;
}
