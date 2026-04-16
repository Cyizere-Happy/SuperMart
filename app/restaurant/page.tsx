import { redirect } from 'next/navigation';

export default function RestaurantRedirect() {
    redirect('/coffeeshop');
    return null;
}
