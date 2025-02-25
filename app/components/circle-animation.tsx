import { Box } from '@chakra-ui/react';

import styles from '../styles/animation.module.css';

interface CircleAnimationProps {
	color: string;
	children: React.ReactNode;
}

const CircleAnimation = ({ children, color }: CircleAnimationProps) => {
	return (
		<Box
			position='relative'
			display='inline-block'
			_after={{
				content: '""',
				position: 'absolute',
				top: '-10px',
				left: '-15px',
				width: '200%',
				height: '100%',
				borderRadius: '50%',
				border: `2px solid ${color}`,
				opacity: '0.5',
				animation: `${styles.drawCircle} 1.5s linear forwards`,
				zIndex: '-1',
			}}>
			{children}
		</Box>
	);
};

export default CircleAnimation;
