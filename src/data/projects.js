/**
 * Project data for the portfolio — update demo/GitHub URLs when deployed.
 */
export const projectCategories = ['All', 'HRMS', 'E-commerce', 'OSI PI'];

export const projects = [
  {
    id: 'hrms',
    category: 'HRMS',
    title: 'HRMS Platform',
    description:
      'Enterprise human resource management system with role-based access, streamlining employee lifecycle and operations.',
    features: ['Employee management', 'Attendance tracking', 'Analytics dashboard'],
    tech: ['React', 'REST API', 'Tailwind CSS'],
    demoUrl: 'https://example.com/hrms-demo',
    repoUrl: 'https://github.com/mayursinhcerebulb/HRMS',
  },
  {
    id: 'ecommerce',
    category: 'E-commerce',
    title: 'E-commerce Store',
    description:
      'Full-featured storefront with cart, checkout flow, and product discovery optimized for conversion.',
    features: ['Product listing', 'Cart & checkout', 'Filtering & search'],
    tech: ['React', 'Context API', 'REST API'],
    demoUrl: 'https://example.com/ecommerce-demo',
    repoUrl: '',
  },
  {
    id: 'osipi',
    category: 'OSI PI',
    title: 'Industrial Data Dashboard',
    description:
      'OSI PI domain visualization system for real-time industrial metrics and operational monitoring.',
    features: ['Real-time data display', 'Charts & trends', 'Monitoring alerts'],
    tech: ['React', 'Charts', 'Web APIs'],
    demoUrl: 'https://example.com/osipi-demo',
    repoUrl: 'https://github.com/darshanpatel/osi-pi-dashboard',
  },
];

