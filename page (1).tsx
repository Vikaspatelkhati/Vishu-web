import ProductDetail from './ProductDetail';

export async function generateStaticParams() {
  return [
    { id: 'roller-blind' },
    { id: 'roman-blind' },
    { id: 'vertical-blind' },
    { id: 'venetian-blind' },
    { id: 'sheer-curtain' },
    { id: 'blackout-curtain' },
    { id: 'eyelet-curtain' },
    { id: 'silk-curtain' },
    { id: 'wooden-rod' },
    { id: 'metal-rod' },
    { id: 'extendable-rod' },
    { id: 'motorized-track' },
    { id: 'curtain-tieback' },
    { id: 'end-cap' },
    { id: 'holdback' },
    { id: 'curtain-ring' },
  ];
}

export default function ProductPage({ params }: { params: { id: string } }) {
  return <ProductDetail productId={params.id} />;
}