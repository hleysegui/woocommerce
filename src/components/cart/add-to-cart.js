"use client"

import { isEmpty } from 'lodash';
import { addToCart } from '../../utils/cart';
import { useContext, useState } from 'react';
import { AppContext } from '../context';
import Link from 'next/link';

const AddToCart = ( { product } ) => {
	
	const [ cart, setCart ] = useContext( AppContext );
	const [ isAddedToCart, setIsAddedToCart ] = useState( false );
	const [ loading, setLoading ] = useState( false );
	
	if ( isEmpty( product ) ) {
		return null;
	}
	
	return (
		<>
			<button
				className=""
				onClick={ () => addToCart( product?.id ?? 0, 1, setCart, setIsAddedToCart, setLoading ) }
				disabled={ loading }
			>
				{ loading ? 'Adding...' : 'Add to cart' }
			</button>
			{ isAddedToCart && ! loading ? (
				<Link href="/cart">
						View cart
				</Link>
			) : null }
		</>
	);
};

export default AddToCart;